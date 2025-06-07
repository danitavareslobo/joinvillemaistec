import React from 'react';
import TemplateInicioPage from '../../components/templates/TemplateInicioPage/TemplateInicioPage';


interface InicioPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const InicioPage: React.FC<InicioPageProps> = ({ currentPage, onNavigate }) => {
  return (
    <TemplateInicioPage currentPage={currentPage} onNavigate={onNavigate}>
    </TemplateInicioPage>
  );
};

export default InicioPage;