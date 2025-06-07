import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/organisms/Navbar/Navbar';
import FilmeGrid from './components/organisms/FilmeGrid/FilmeGrid';
import FilmeDetalhes from './components/organisms/FilmeDetalhes/FilmeDetalhes';
import { filmesMock, getFilmeById } from './data/filmesMock';
import type { Filme } from './types';
import './App.css';

type PageType = 'inicio' | 'filmes' | 'detalhesFilme' | 'contato';

const pages: Record<string, PageType> = {
  inicio: 'inicio',
  filmes: 'filmes',
  detalhesFilme: 'detalhesFilme',
  contato: 'contato'
};

const InicioPage: React.FC = () => (
  <div className="page-container">
    <div className="page-content">
      <h1>Página Inicial - TicketOnline</h1>
      <p>Bem-vindo à nossa loja de tickets de cinema!</p>
    </div>
  </div>
);

interface FilmesPageProps {
  onVerMais: (id: number) => void;
}

const FilmesPage: React.FC<FilmesPageProps> = ({ onVerMais }) => (
  <div className="filme-page">
    <FilmeGrid filmes={filmesMock} onVerMais={onVerMais} />
  </div>
);

interface DetalhesFilmePageProps {
  filme: Filme | null;
  onVoltar: () => void;
}

const DetalhesFilmePage: React.FC<DetalhesFilmePageProps> = ({ filme, onVoltar }) => {
  if (!filme) {
    return (
      <div className="page-container">
        <div className="page-content">
          <h1>Filme não encontrado</h1>
          <p>O filme solicitado não foi encontrado.</p>
          <button className="btn-back" onClick={onVoltar}>← Voltar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="filme-page">
      <FilmeDetalhes filme={filme} onVoltar={onVoltar} />
    </div>
  );
};

const ContatoPage: React.FC = () => (
  <div className="page-container">
    <div className="page-content">
      <h1>Contato</h1>
      <p>Entre em contato conosco</p>
    </div>
  </div>
);

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
        return <InicioPage />;
      case pages.filmes:
        return <FilmesPage onVerMais={handleVerMais} />;
      case pages.detalhesFilme:
        const filme = selectedFilmeId ? getFilmeById(selectedFilmeId) : null;
        return <DetalhesFilmePage filme={filme || null} onVoltar={handleVoltar} />;
      case pages.contato:
        return <ContatoPage />;
      default:
        return <InicioPage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;