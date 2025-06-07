import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import './TemplateFilmesPage.css';

interface TemplateFilmesPageProps {
  children?: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const TemplateFilmesPage: React.FC<TemplateFilmesPageProps> = ({ 
  children, 
  currentPage, 
  onNavigate 
}) => {
  return (
    <div className="template-filmes">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="template-main-filmes">
        <div className="filmes-container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplateFilmesPage;