import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Cronometro.css';

interface CronometroState {
  segundos: number;
  ativo: boolean;
  modoExibicao: 'completo' | 'segundos';
}

const Cronometro: React.FC = () => {
  const [segundos, setSegundos] = useState<number>(0);
  const [ativo, setAtivo] = useState<boolean>(false);
  const [modoExibicao, setModoExibicao] = useState<'completo' | 'segundos'>('completo');
  const [tempoInicialSessao, setTempoInicialSessao] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);
  const tituloOriginalRef = useRef<string>('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const STORAGE_KEY = 'cronometro-estado';

  useEffect(() => {
    const carregarEstado = (): void => {
      try {
        const estadoSalvo = localStorage.getItem(STORAGE_KEY);
        if (estadoSalvo) {
          const estado: CronometroState = JSON.parse(estadoSalvo);
          
          if (typeof estado.segundos === 'number' && estado.segundos >= 0) {
            setSegundos(estado.segundos);
            setTempoInicialSessao(estado.segundos);
          }
          if (typeof estado.modoExibicao === 'string') {
            setModoExibicao(estado.modoExibicao);
          }
          
          console.log(`📂 Estado do cronômetro carregado: ${formatarTempo(estado.segundos)}`);
        }
      } catch (error) {
        console.error('❌ Erro ao carregar estado do cronômetro:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    };

    carregarEstado();
  }, []);

  useEffect(() => {
    const salvarEstado = (): void => {
      try {
        const estado: CronometroState = {
          segundos,
          ativo: false, 
          modoExibicao
        };
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
      } catch (error) {
        console.error('❌ Erro ao salvar estado do cronômetro:', error);
      }
    };

    if (segundos > 0 || modoExibicao !== 'completo') {
      salvarEstado();
    }
  }, [segundos, modoExibicao]);

  useEffect(() => {
    tituloOriginalRef.current = document.title;
    
    return () => {
      document.title = tituloOriginalRef.current;
    };
  }, []);

  useEffect(() => {
    const atualizarTitulo = () => {
      if (segundos === 0 && !ativo) {
        document.title = tituloOriginalRef.current;
      } else if (ativo) {
        const tempoFormatado = formatarTempo(segundos);
        document.title = `⏰ ${tempoFormatado} - Cronômetro Ativo`;
      } else {
        const tempoFormatado = formatarTempo(segundos);
        document.title = `⏸️ ${tempoFormatado} - Cronômetro Pausado`;
      }
    };

    atualizarTitulo();
  }, [segundos, ativo]);

  useEffect(() => {
    if (ativo) {
      intervalRef.current = window.setInterval(() => {
        setSegundos(segundosAtuais => segundosAtuais + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [ativo]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.code) {
        case 'Space':
          event.preventDefault();
          alternarCronometro();
          break;
        case 'KeyR':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            zerarCronometro();
          }
          break;
        case 'KeyT':
          event.preventDefault();
          alternarModoExibicao();
          break;
        case 'Escape':
          if (ativo) {
            alternarCronometro();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [ativo, segundos]);

  const alternarCronometro = useCallback((): void => {
    setAtivo(prevAtivo => {
      const novoEstado = !prevAtivo;
      
      if (novoEstado) {
        console.log('⏰ Cronômetro iniciado');
        if (segundos === 0) {
          setTempoInicialSessao(0);
        }
      } else {
        console.log('⏸️ Cronômetro pausado');
      }
      
      return novoEstado;
    });
  }, [segundos]);

  const zerarCronometro = useCallback((): void => {
    setAtivo(false);
    setSegundos(0);
    setTempoInicialSessao(0);
    
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    console.log('🔄 Cronômetro zerado');
  }, []);

  const alternarModoExibicao = useCallback((): void => {
    setModoExibicao(modo => modo === 'completo' ? 'segundos' : 'completo');
  }, []);

  const exportarRelatorio = (): void => {
    const agora = new Date();
    const relatorio = {
      sessao: {
        inicio: new Date(agora.getTime() - (segundos - tempoInicialSessao) * 1000).toISOString(),
        fim: agora.toISOString(),
        duracao: segundos - tempoInicialSessao,
        duracaoFormatada: formatarTempoDetalhado(segundos - tempoInicialSessao)
      },
      cronometro: {
        tempoTotal: segundos,
        tempoTotalFormatado: formatarTempoDetalhado(segundos),
        status: ativo ? 'ativo' : 'pausado',
        modoExibicao
      },
      metadata: {
        exportadoEm: agora.toISOString(),
        navegador: navigator.userAgent,
        plataforma: navigator.platform
      }
    };

    const dataStr = JSON.stringify(relatorio, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `cronometro-relatorio-${agora.toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    console.log('📊 Relatório exportado com sucesso');
  };

  const formatarTempo = (totalSegundos: number): string => {
    const minutos = Math.floor(totalSegundos / 60);
    const segundosRestantes = totalSegundos % 60;
    
    return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
  };

  const formatarTempoDetalhado = (totalSegundos: number): string => {
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundosRestantes = totalSegundos % 60;

    if (horas > 0) {
      return `${horas}h ${minutos}m ${segundosRestantes}s`;
    } else if (minutos > 0) {
      return `${minutos}m ${segundosRestantes}s`;
    } else {
      return `${segundosRestantes}s`;
    }
  };

  const obterDescricaoTempo = (totalSegundos: number): string => {
    if (totalSegundos === 0) return 'Pronto para começar';
    if (totalSegundos < 60) return 'Menos de um minuto';
    if (totalSegundos < 300) return 'Poucos minutos';
    if (totalSegundos < 900) return 'Um quarto de hora';
    if (totalSegundos < 1800) return 'Meia hora se aproximando';
    if (totalSegundos < 3600) return 'Menos de uma hora';
    return 'Mais de uma hora!';
  };

  const tempoSessaoAtual = segundos - tempoInicialSessao;

  return (
    <div className={`cronometro-container ${ativo ? 'ativo' : ''}`}>
      <div className="cronometro-header">
        <h2>Cronômetro</h2>
        <p className="cronometro-descricao">
          Acompanhe o tempo das suas atividades
        </p>
      </div>

      <div className={`cronometro-display ${ativo ? 'ativo' : ''}`}>
        <div 
          className={`tempo-principal ${ativo ? 'ativo' : ''}`}
          onClick={alternarModoExibicao}
          title="Clique para alternar entre MM:SS e segundos (Tecla T)"
        >
          {modoExibicao === 'completo' ? formatarTempo(segundos) : `${segundos}s`}
        </div>
        <div className="tempo-segundos">
          {modoExibicao === 'completo' 
            ? `${segundos} segundo${segundos !== 1 ? 's' : ''} decorrido${segundos !== 1 ? 's' : ''}`
            : formatarTempo(segundos)
          }
        </div>
        <div className="tempo-descricao">
          {obterDescricaoTempo(segundos)}
        </div>
      </div>

      <div className="cronometro-controles">
        <button 
          className={`btn-controle ${ativo ? 'btn-pausar' : 'btn-iniciar'}`}
          onClick={alternarCronometro}
          title={ativo ? 'Pausar cronômetro (Espaço/Esc)' : 'Iniciar cronômetro (Espaço)'}
          aria-label={ativo ? 'Pausar cronômetro' : 'Iniciar cronômetro'}
        >
          {ativo ? '⏸️ Pausar' : '▶️ Iniciar'}
        </button>

        <button 
          className="btn-controle btn-zerar"
          onClick={zerarCronometro}
          disabled={segundos === 0 && !ativo}
          title="Zerar cronômetro (Ctrl+R)"
          aria-label="Zerar cronômetro"
        >
          🔄 Zerar
        </button>

        {segundos > 60 && (
          <button 
            className="btn-controle btn-exportar"
            onClick={exportarRelatorio}
            title="Exportar relatório de tempo"
            aria-label="Exportar relatório"
          >
            📊 Exportar
          </button>
        )}
      </div>

      <div className="cronometro-info">
        <div className="info-item">
          <span className="info-label">Status:</span>
          <span className={`info-valor ${ativo ? 'status-ativo' : 'status-pausado'}`}>
            {ativo ? 'Em execução' : 'Pausado'}
          </span>
        </div>
        
        {segundos > 0 && (
          <>
            <div className="info-item">
              <span className="info-label">Tempo total:</span>
              <span className="info-valor info-tempo">
                {formatarTempoDetalhado(segundos)}
              </span>
            </div>
            
            {tempoSessaoAtual > 0 && (
              <div className="info-item">
                <span className="info-label">Sessão atual:</span>
                <span className="info-valor info-sessao">
                  {formatarTempoDetalhado(tempoSessaoAtual)}
                </span>
              </div>
            )}
            
            <div className="info-item">
              <span className="info-label">Em segundos:</span>
              <span className="info-valor info-segundos">
                {segundos.toLocaleString()} seg
              </span>
            </div>
            
            {segundos >= 60 && (
              <div className="info-item">
                <span className="info-label">Em minutos:</span>
                <span className="info-valor info-minutos">
                  {(segundos / 60).toFixed(2)} min
                </span>
              </div>
            )}
          </>
        )}
        
        <div className="info-item">
          <span className="info-label">Título da página:</span>
          <span className="info-valor info-titulo">
            {ativo ? 'Atualização em tempo real' : 'Sincronizado'}
          </span>
        </div>
      </div>

      <div className="cronometro-atalhos">
        <h4>⌨️ Atalhos de Teclado:</h4>
        <div className="atalhos-grid">
          <span className="atalho"><kbd>Espaço</kbd> Iniciar/Pausar</span>
          <span className="atalho"><kbd>Ctrl+R</kbd> Zerar</span>
          <span className="atalho"><kbd>T</kbd> Alternar formato</span>
          <span className="atalho"><kbd>Esc</kbd> Pausar (se ativo)</span>
        </div>
      </div>

      <div className="cronometro-dica">
        <small>💡 Clique no tempo principal para alternar entre formatos</small>
        <br />
        <small>🔗 O título da aba do navegador é atualizado em tempo real</small>
        <br />
        <small>💾 Seu progresso é salvo automaticamente</small>
      </div>
    </div>
  );
};

export default Cronometro;