import React from 'react';
import type { FilmeCardProps } from '../../../types';
import './FilmeCard.css';

const FilmeCard: React.FC<FilmeCardProps> = ({ filme, onVerMais }) => {
  return (
    <div className="filme-card">
      <div className="filme-card-image">
        <img src={filme.imagem} alt={`Cartaz do filme ${filme.nome}`} />
        <div className="filme-card-overlay">
          <button 
            className="btn-ver-mais"
            onClick={() => onVerMais(filme.id)}
          >
            Ver mais informações
          </button>
        </div>
      </div>
      
      <div className="filme-card-content">
        <h3 className="filme-card-title">{filme.nome}</h3>
        
        <div className="filme-card-info">
          <span className="filme-card-genero">{filme.genero}</span>
          <span className="filme-card-idade">{filme.idadeIndicada}</span>
        </div>
      </div>
    </div>
  );
};

export default FilmeCard;