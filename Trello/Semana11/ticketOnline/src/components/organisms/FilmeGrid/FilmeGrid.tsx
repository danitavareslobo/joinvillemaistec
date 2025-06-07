import React from 'react';
import type { FilmeGridProps } from '../../../types';
import FilmeCard from '../../molecules/FilmeCard/FilmeCard';
import './FilmeGrid.css';

const FilmeGrid: React.FC<FilmeGridProps> = ({ filmes, onVerMais }) => {
  if (!filmes || filmes.length === 0) {
    return (
      <div className="filme-grid-empty">
        <div className="empty-state">
          <h3>Nenhum filme encontrado</h3>
          <p>Não há filmes disponíveis no momento.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="filme-grid-container">
      <div className="filme-grid-header">
        <h2>Filmes em Cartaz</h2>
        <p>{filmes.length} {filmes.length === 1 ? 'filme disponível' : 'filmes disponíveis'}</p>
      </div>
      
      <div className="filme-grid">
        {filmes.map((filme, index) => (
          <div 
            key={filme.id} 
            className="filme-grid-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <FilmeCard filme={filme} onVerMais={onVerMais} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmeGrid;