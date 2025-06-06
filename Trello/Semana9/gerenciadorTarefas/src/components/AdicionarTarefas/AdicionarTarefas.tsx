import React, { useState } from 'react';
import type { NovaTarefa, Periodo } from '../../types';
import './AdicionarTarefas.css';

interface AdicionarTarefaProps {
  onAdicionarTarefa: (novaTarefa: NovaTarefa) => void;
}

const AdicionarTarefa: React.FC<AdicionarTarefaProps> = ({ onAdicionarTarefa }) => {
  const [descricao, setDescricao] = useState<string>('');
  const [periodo, setPeriodo] = useState<Periodo>('Manhã');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (descricao.trim() === '') {
      alert('Por favor, insira uma descrição para a tarefa.');
      return;
    }

    const novaTarefa: NovaTarefa = {
      descricao: descricao.trim(),
      periodo: periodo
    };

    onAdicionarTarefa(novaTarefa);
    
    setDescricao('');
    setPeriodo('Manhã');
  };

  const handleDescricaoChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDescricao(e.target.value);
  };

  const handlePeriodoChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setPeriodo(e.target.value as Periodo);
  };

  return (
    <div className="adicionar-tarefa-container">
      <h2>Adicionar Nova Tarefa</h2>
      
      <form onSubmit={handleSubmit} className="adicionar-tarefa-form">
        <div className="form-group">
          <label htmlFor="descricao">Descrição da Tarefa:</label>
          <input
            type="text"
            id="descricao"
            value={descricao}
            onChange={handleDescricaoChange}
            placeholder="Digite a descrição da tarefa..."
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="periodo">Período:</label>
          <select
            id="periodo" 
            value={periodo}
            onChange={handlePeriodoChange}
            className="form-select"
          >
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>
        </div>

        <button type="submit" className="btn-adicionar">
          Adicionar Tarefa
        </button>
      </form>
    </div>
  );
};

export default AdicionarTarefa;