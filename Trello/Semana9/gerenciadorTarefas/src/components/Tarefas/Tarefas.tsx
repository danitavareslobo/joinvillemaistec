import React, { useState } from 'react';
import AdicionarTarefa from '../AdicionarTarefas/AdicionarTarefas';
import type { Tarefa, NovaTarefa } from '../../types';
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

  return (
    <div className="tarefas-container">
      <AdicionarTarefa onAdicionarTarefa={adicionarTarefa} />
      
      <div className="tarefas-lista">
        <h2>Suas Tarefas ({tarefas.length})</h2>
        {tarefas.length === 0 ? (
          <p className="sem-tarefas">Nenhuma tarefa adicionada ainda.</p>
        ) : (
          <div className="tarefas-grid">
            {tarefas.map((tarefa: Tarefa) => (
              <div key={tarefa.id} className={`tarefa-item ${tarefa.concluida ? 'concluida' : ''}`}>
                <div className="tarefa-header">
                  <span className={`periodo-badge periodo-${tarefa.periodo.toLowerCase()}`}>
                    {tarefa.periodo}
                  </span>
                </div>
                <div className="tarefa-descricao">
                  {tarefa.descricao}
                </div>
                <div className="tarefa-status">
                  Status: {tarefa.concluida ? 'Concluída' : 'Pendente'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tarefas;