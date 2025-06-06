import React from 'react';
import './Apresentacao.css';

const Apresentacao: React.FC = () => {
  return (
    <section id="inicio" className="apresentacao">
      <div className="apresentacao-container">
        <div className="apresentacao-texto">
          <div className="texto-wrapper">
            <h2 className="frase-principal">
              Servindo massas há mais de 
              <span className="destaque-anos"> 70 anos</span>
            </h2>
            <p className="subfrase">
              Qualidade passada por gerações
            </p>
            <div className="decoracao-linha"></div>
            <p className="texto-adicional">
              Uma tradição familiar que combina receitas autênticas 
              com o amor pela culinária italiana.
            </p>
          </div>
        </div>

        <div className="apresentacao-imagem">
          <div className="imagem-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Fachada do Restaurante Mamamia Massas"
              className="fachada-imagem"
            />
            <div className="imagem-overlay">
              <span className="overlay-texto">Mamamia Massas</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="decoracao-fundo">
        <div className="circulo circulo-1"></div>
        <div className="circulo circulo-2"></div>
        <div className="circulo circulo-3"></div>
      </div>
    </section>
  );
};

export default Apresentacao;