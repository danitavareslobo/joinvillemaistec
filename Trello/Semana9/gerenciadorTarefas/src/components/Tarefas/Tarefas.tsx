import React, { useState, useEffect } from 'react';
import AdicionarTarefa from '../AdicionarTarefas/AdicionarTarefas';
import PercentualConclusao from '../PercentualConclusao/PercentualConclusao';
import type { Tarefa, NovaTarefa, Periodo } from '../../types';
import './Tarefas.css';

const Tarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const STORAGE_KEY = 'tarefas-diarias';

  useEffect(() => {
    const carregarTarefas = (): void => {
      try {
        const tarefasSalvas = localStorage.getItem(STORAGE_KEY);
        
        if (tarefasSalvas) {
          const tarefasParsed: Tarefa[] = JSON.parse(tarefasSalvas);
          
          const tarefasValidas = tarefasParsed.filter(tarefa => 
            tarefa &&
            typeof tarefa.id === 'number' &&
            typeof tarefa.descricao === 'string' &&
            typeof tarefa.periodo === 'string' &&
            typeof tarefa.concluida === 'boolean' &&
            ['Manhã', 'Tarde', 'Noite'].includes(tarefa.periodo)
          );
          
          setTarefas(tarefasValidas);
          
          if (tarefasValidas.length > 0) {
            console.log(`✅ ${tarefasValidas.length} tarefa(s) carregada(s) do localStorage`);
          }
        }
      } catch (error) {
        console.error('❌ Erro ao carregar tarefas do localStorage:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    };

    carregarTarefas();
  }, []); 
   
  useEffect(() => {
    const salvarTarefas = (): void => {
      try {
        const tarefasJson = JSON.stringify(tarefas);
        localStorage.setItem(STORAGE_KEY, tarefasJson);
        
        if (tarefas.length > 0) {
          console.log(`💾 ${tarefas.length} tarefa(s) salva(s) no localStorage`);
        }
      } catch (error) {
        console.error('❌ Erro ao salvar tarefas no localStorage:', error);
      }
    };

    salvarTarefas();
  }, [tarefas]); 

  const adicionarTarefa = (novaTarefa: NovaTarefa): void => {
    const tarefa: Tarefa = {
      id: Date.now(), 
      descricao: novaTarefa.descricao,
      periodo: novaTarefa.periodo,
      concluida: false
    };
    
    setTarefas(tarefasAtuais => [...tarefasAtuais, tarefa]);
    console.log(`➕ Nova tarefa adicionada: "${tarefa.descricao}" - ${tarefa.periodo}`);
  };

  const alternarConclusaoTarefa = (id: number): void => {
    setTarefas(tarefasAtuais => 
      tarefasAtuais.map(tarefa => {
        if (tarefa.id === id) {
          const novoStatus = !tarefa.concluida;
          console.log(`${novoStatus ? '✅' : '⏳'} Tarefa "${tarefa.descricao}" marcada como ${novoStatus ? 'concluída' : 'pendente'}`);
          return { ...tarefa, concluida: novoStatus };
        }
        return tarefa;
      })
    );
  };

  const limparTodasTarefas = (): void => {
    if (window.confirm('Tem certeza que deseja limpar todas as tarefas? Esta ação não pode ser desfeita.')) {
      setTarefas([]);
      localStorage.removeItem(STORAGE_KEY);
      console.log('🗑️ Todas as tarefas foram removidas');
    }
  };

  const exportarTarefas = (): void => {
    try {
      const dataStr = JSON.stringify(tarefas, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `tarefas-diarias-${new Date().toISOString().split('T')[0]}.json`;
      link.click();
      
      URL.revokeObjectURL(url);
      console.log('📁 Tarefas exportadas com sucesso');
    } catch (error) {
      console.error('❌ Erro ao exportar tarefas:', error);
    }
  };

  const tarefasPorPeriodo = (periodo: Periodo): Tarefa[] => {
    return tarefas.filter(tarefa => tarefa.periodo === periodo);
  };

  const tarefasConcluidasPorPeriodo = (periodo: Periodo): number => {
    return tarefas.filter(tarefa => tarefa.periodo === periodo && tarefa.concluida).length;
  };

  const totalTarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;

  const periodos: Periodo[] = ['Manhã', 'Tarde', 'Noite'];

  return (
    <div className="tarefas-container">
      <AdicionarTarefa onAdicionarTarefa={adicionarTarefa} />
      
      <PercentualConclusao 
        totalTarefas={tarefas.length}
        tarefasCompletas={totalTarefasConcluidas}
        titulo="Progresso das Tarefas Diárias"
        mostrarDetalhes={true}
      />
      
      <div className="tarefas-resumo">
        <h2>Suas Tarefas</h2>
        <div className="resumo-stats">
          <span className="stat-item">Total: {tarefas.length}</span>
          <span className="stat-item">Concluídas: {totalTarefasConcluidas}</span>
          <span className="stat-item">Pendentes: {tarefas.length - totalTarefasConcluidas}</span>
        </div>
        
        {tarefas.length > 0 && (
          <div className="botoes-gerenciamento">
            <button 
              onClick={exportarTarefas}
              className="btn-secundario"
              title="Exportar tarefas como JSON"
            >
              📁 Exportar
            </button>
            <button 
              onClick={limparTodasTarefas}
              className="btn-perigo"
              title="Limpar todas as tarefas"
            >
              🗑️ Limpar Tudo
            </button>
          </div>
        )}
      </div>

      <div className="tarefas-por-periodo">
        {periodos.map(periodo => {
          const tarefasDestePeriodo = tarefasPorPeriodo(periodo);
          const concluidasDestePeriodo = tarefasConcluidasPorPeriodo(periodo);
          
          return (
            <div key={periodo} className="coluna-periodo">
              <div className="periodo-header">
                <h3 className={`periodo-titulo periodo-${periodo.toLowerCase()}`}>
                  {periodo}
                </h3>
                <div className="periodo-contador">
                  <span className="total-tarefas">{tarefasDestePeriodo.length} tarefas</span>
                  {tarefasDestePeriodo.length > 0 && (
                    <div className="tarefas-concluidas">
                      {concluidasDestePeriodo} concluída{concluidasDestePeriodo !== 1 ? 's' : ''}
                    </div>
                  )}
                </div>
                
                {tarefasDestePeriodo.length > 0 && (
                  <div className="percentual-periodo">
                    <PercentualConclusao 
                      totalTarefas={tarefasDestePeriodo.length}
                      tarefasCompletas={concluidasDestePeriodo}
                      titulo={`${periodo}`}
                      mostrarDetalhes={false}
                    />
                  </div>
                )}
              </div>

              <div className="tarefas-lista-periodo">
                {tarefasDestePeriodo.length === 0 ? (
                  <div className="sem-tarefas-periodo">
                    <p>Nenhuma tarefa para {periodo.toLowerCase()}</p>
                  </div>
                ) : (
                  tarefasDestePeriodo.map(tarefa => (
                    <div 
                      key={tarefa.id} 
                      className={`tarefa-card ${tarefa.concluida ? 'tarefa-concluida' : 'tarefa-pendente'}`}
                    >
                      <div className="tarefa-conteudo">
                        <div className="tarefa-checkbox-area">
                          <input
                            type="checkbox"
                            id={`tarefa-${tarefa.id}`}
                            checked={tarefa.concluida}
                            onChange={() => alternarConclusaoTarefa(tarefa.id)}
                            className="tarefa-checkbox"
                          />
                          <label 
                            htmlFor={`tarefa-${tarefa.id}`}
                            className={`tarefa-descricao ${tarefa.concluida ? 'tarefa-descricao-concluida' : ''}`}
                          >
                            {tarefa.descricao}
                          </label>
                        </div>
                        <div className="tarefa-status">
                          <span className={`status-badge ${tarefa.concluida ? 'status-concluida' : 'status-pendente'}`}>
                            {tarefa.concluida ? '✓ Concluída' : '⏳ Pendente'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tarefas;