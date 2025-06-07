import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import InicioPage from './pages/InicioPage/InicioPage';
import FilmesPage from './pages/FilmesPage/FilmesPage';
import DetFilmesPage from './pages/DetFilmesPage/DetFilmesPage';
import ContatoPage from './pages/ContatoPage/ContatoPage';
import { getFilmeById } from './data/filmesMock';
import type { Filme } from './types';
import './App.css';
import './styles/global.css';
import './styles/variables.css';

type PageType = 'inicio' | 'filmes' | 'detalhesFilme' | 'contato';

const pages: Record<string, PageType> = {
  inicio: 'inicio',
  filmes: 'filmes',
  detalhesFilme: 'detalhesFilme',
  contato: 'contato'
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>(pages.inicio);
  const [selectedFilmeId, setSelectedFilmeId] = useState<number | null>(null);

  const handleNavigate = (page: string): void => {
    setCurrentPage(page as PageType);
    if (page !== 'detalhesFilme') {
      setSelectedFilmeId(null);
    }
  };

  const handleVerMais = (filmeId: number): void => {
    setSelectedFilmeId(filmeId);
    setCurrentPage('detalhesFilme');
  };

  const handleVoltar = (): void => {
    setCurrentPage('filmes');
    setSelectedFilmeId(null);
  };

  const renderPage = (): React.ReactElement => {
    switch(currentPage) {
      case pages.inicio:
        return (
          <InicioPage 
            currentPage={currentPage} 
            onNavigate={handleNavigate} 
          />
        );
      case pages.filmes:
        return (
          <FilmesPage 
            currentPage={currentPage} 
            onNavigate={handleNavigate}
            onVerMais={handleVerMais}
          />
        );
      case pages.detalhesFilme:
        const filme = selectedFilmeId ? getFilmeById(selectedFilmeId) : null;
        return (
          <DetFilmesPage 
            currentPage={currentPage} 
            onNavigate={handleNavigate}
            filme={filme || null}
            onVoltar={handleVoltar}
          />
        );
      case pages.contato:
        return (
          <ContatoPage 
            currentPage={currentPage} 
            onNavigate={handleNavigate}
          />
        );
      default:
        return (
          <InicioPage 
            currentPage={currentPage} 
            onNavigate={handleNavigate} 
          />
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="app">
        {renderPage()}
      </div>
    </ThemeProvider>
  );
};

export default App;