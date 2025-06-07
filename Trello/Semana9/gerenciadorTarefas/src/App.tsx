import React from 'react';
import Tarefas from './components/Tarefas/Tarefas';
import Cronometro from './components/Cronometro/Cronometro';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Gestão de Tarefas Diárias</h1>
      </header>
      <main className="app-main">
        <Tarefas />
        <Cronometro />
      </main>
    </div>
  );
};

export default App;