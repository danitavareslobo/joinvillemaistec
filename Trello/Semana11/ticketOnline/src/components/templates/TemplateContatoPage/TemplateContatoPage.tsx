import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import './TemplateContatoPage.css';

interface TemplateContatoPageProps {
  children?: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const TemplateContatoPage: React.FC<TemplateContatoPageProps> = ({ 
  children, 
  currentPage, 
  onNavigate 
}) => {
  return (
    <div className="template-contato">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="template-main-contato">
        <div className="contato-container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplateContatoPage;