import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import './TemplateInicioPage.css';

interface TemplateInicioPageProps {
  children?: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const TemplateInicioPage: React.FC<TemplateInicioPageProps> = ({ 
  children, 
  currentPage, 
  onNavigate 
}) => {
  return (
    <div className="template-inicio">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="template-main">
        <div className="inicio-hero">
          <div className="hero-content">
            <h1 className="hero-title">Bem-vindo ao TicketOnline</h1>
            <p className="hero-subtitle">
              Descubra os melhores filmes em cartaz e reserve seus ingressos 
              de forma rápida e segura
            </p>
            <div className="hero-image">
              <img 
                src="https://plus.unsplash.com/premium_photo-1726848094123-b69f8c83b824?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNpbmVtYXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Cinema"
                className="cinema-image"
              />
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Filmes</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Cinemas</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Ingressos</span>
              </div>
            </div>
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default TemplateInicioPage;