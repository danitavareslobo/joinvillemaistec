import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import './TemplateDetFilmesPage.css';

interface TemplateDetFilmesPageProps {
  children?: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const TemplateDetFilmesPage: React.FC<TemplateDetFilmesPageProps> = ({ 
  children, 
  currentPage, 
  onNavigate 
}) => {
  return (
    <div className="template-det-filmes">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="template-main-detalhes">
        <div className="detalhes-container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplateDetFilmesPage;