import React, { useState } from 'react';
import AdicionarTarefa from '../AdicionarTarefas/AdicionarTarefas';
import type { Tarefa, NovaTarefa, Periodo } from '../../types';
import './Tarefas.css';

const Tarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const adicionarTarefa = (novaTarefa: NovaTarefa): void => {
    const tarefa: Tarefa = {
      id: Date.now(),
      descricao: novaTarefa.descricao,
      periodo: novaTarefa.periodo,
      concluida: false
    };
    
    setTarefas([...tarefas, tarefa]);
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
      
      <div className="tarefas-resumo">
        <h2>Suas Tarefas</h2>
        <div className="resumo-stats">
          <span className="stat-item">Total: {tarefas.length}</span>
          <span className="stat-item">Concluídas: {totalTarefasConcluidas}</span>
          <span className="stat-item">Pendentes: {tarefas.length - totalTarefasConcluidas}</span>
        </div>
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
                        <p className="tarefa-descricao">{tarefa.descricao}</p>
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