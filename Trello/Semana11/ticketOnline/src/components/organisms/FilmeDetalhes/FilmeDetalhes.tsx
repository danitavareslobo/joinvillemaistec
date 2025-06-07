import React from 'react';
import type { FilmeDetalhesProps } from '../../../types';
import './FilmeDetalhes.css';

const FilmeDetalhes: React.FC<FilmeDetalhesProps> = ({ filme, onVoltar }) => {
  return (
    <div className="filme-detalhes-container">
      <div className="filme-detalhes">
        <button className="btn-voltar" onClick={onVoltar}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5"/>
            <path d="M12 19l-7-7 7-7"/>
          </svg>
          Voltar
        </button>
        
        <div className="filme-detalhes-content">
          <div className="filme-detalhes-image">
            <img src={filme.imagem} alt={`Cartaz do filme ${filme.nome}`} />
            <div className="filme-detalhes-badges">
              <span className="badge-genero">{filme.genero}</span>
              <span className="badge-idade">{filme.idadeIndicada}</span>
            </div>
          </div>
          
          <div className="filme-detalhes-info">
            <div className="filme-header">
              <h1 className="filme-titulo">{filme.nome}</h1>
              
              {(filme.duracao || filme.diretor || filme.ano) && (
                <div className="filme-meta">
                  {filme.ano && <span className="meta-item">{filme.ano}</span>}
                  {filme.duracao && <span className="meta-item">{filme.duracao}</span>}
                  {filme.diretor && <span className="meta-item">Dir: {filme.diretor}</span>}
                </div>
              )}
            </div>
            
            <div className="filme-sinopse">
              <h3>Sinopse</h3>
              <p>{filme.sinopse}</p>
            </div>
            
            <div className="filme-actions">
              <button className="btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
                Assistir Trailer
              </button>
              <button className="btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
                Comprar Ingresso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmeDetalhes;