import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/organisms/Navbar/Navbar';
import './App.css';

const pages = {
  inicio: 'inicio',
  filmes: 'filmes',
  detalhesFilme: 'detalhesFilme',
  contato: 'contato'
};

const InicioPage = () => (
  <div className="page-container">
    <div className="page-content">
      <h1>Página Inicial - TicketOnline</h1>
      <p>Bem-vindo à nossa loja de tickets de cinema!</p>
    </div>
  </div>
);

const FilmesPage = () => (
  <div className="page-container">
    <div className="page-content">
      <h1>Filmes em Cartaz</h1>
      <p>Lista de filmes disponíveis</p>
    </div>
  </div>
);

const DetalhesFilmePage = () => (
  <div className="page-container">
    <div className="page-content">
      <h1>Detalhes do Filme</h1>
      <p>Informações detalhadas do filme selecionado</p>
      <button className="btn-back">← Voltar</button>
    </div>
  </div>
);

const ContatoPage = () => (
  <div className="page-container">
    <div className="page-content">
      <h1>Contato</h1>
      <p>Entre em contato conosco</p>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState(pages.inicio);

  const renderPage = () => {
    switch(currentPage) {
      case pages.inicio:
        return <InicioPage />;
      case pages.filmes:
        return <FilmesPage />;
      case pages.detalhesFilme:
        return <DetalhesFilmePage />;
      case pages.contato:
        return <ContatoPage />;
      default:
        return <InicioPage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;