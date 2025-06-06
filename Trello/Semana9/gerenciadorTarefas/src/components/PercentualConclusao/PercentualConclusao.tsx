import React from 'react';
import './PercentualConclusao.css';

interface PercentualConclusaoProps {
  totalTarefas: number;
  tarefasCompletas: number;
  titulo?: string;
  mostrarDetalhes?: boolean;
}

const PercentualConclusao: React.FC<PercentualConclusaoProps> = ({ 
  totalTarefas, 
  tarefasCompletas,
  titulo = "Progresso Geral",
  mostrarDetalhes = true
}) => {
  const progresso = totalTarefas > 0 ? (tarefasCompletas / totalTarefas) * 100 : 0;
  const progressoArredondado = Math.round(progresso);

  const getCorProgresso = (percentual: number): string => {
    if (percentual === 100) return 'progresso-completo';
    if (percentual >= 75) return 'progresso-alto';
    if (percentual >= 50) return 'progresso-medio';
    if (percentual >= 25) return 'progresso-baixo';
    return 'progresso-inicial';
  };

  const getMensagemMotivacional = (percentual: number): string => {
    if (percentual === 100) return '🎉 Parabéns! Todas as tarefas concluídas!';
    if (percentual >= 75) return '💪 Quase lá! Continue assim!';
    if (percentual >= 50) return '🚀 Você está no meio do caminho!';
    if (percentual >= 25) return '📈 Bom progresso! Continue!';
    if (percentual > 0) return '🌱 Começou bem! Vamos em frente!';
    return '📝 Adicione tarefas para começar!';
  };

  return (
    <div className="percentual-conclusao-container">
      <div className="percentual-header">
        <h3 className="percentual-titulo">{titulo}</h3>
        <span className="percentual-valor">{progressoArredondado}%</span>
      </div>
      
      <div className="barra-progresso">
        <div 
          className={`barra-preenchimento ${getCorProgresso(progresso)}`}
          style={{ width: `${progresso}%` }}
        >
          <div className="barra-animacao"></div>
        </div>
      </div>

      {mostrarDetalhes && (
        <div className="percentual-detalhes">
          <div className="detalhes-numeros">
            <span className="detalhe-item">
              <strong>{tarefasCompletas}</strong> de <strong>{totalTarefas}</strong> tarefas
            </span>
          </div>
          <div className="mensagem-motivacional">
            {getMensagemMotivacional(progresso)}
          </div>
        </div>
      )}
    </div>
  );
};

export default PercentualConclusao;