import React from 'react';
import TemplateFilmesPage from '../../components/templates/TemplateFilmesPage/TemplateFilmesPage';
import FilmeGrid from '../../components/organisms/FilmeGrid/FilmeGrid';
import { filmesMock } from '../../data/filmesMock';

interface FilmesPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onVerMais: (id: number) => void;
}

const FilmesPage: React.FC<FilmesPageProps> = ({ currentPage, onNavigate, onVerMais }) => {
  return (
    <TemplateFilmesPage currentPage={currentPage} onNavigate={onNavigate}>
      <FilmeGrid filmes={filmesMock} onVerMais={onVerMais} />
    </TemplateFilmesPage>
  );
};

export default FilmesPage;