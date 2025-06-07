import React from 'react';
import TemplateDetFilmesPage from '../../components/templates/TemplateDetFilmesPage/TemplateDetFilmesPage';
import FilmeDetalhes from '../../components/organisms/FilmeDetalhes/FilmeDetalhes';
import type { Filme } from '../../types';

interface DetFilmesPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  filme: Filme | null;
  onVoltar: () => void;
}

const DetFilmesPage: React.FC<DetFilmesPageProps> = ({ 
  currentPage, 
  onNavigate, 
  filme, 
  onVoltar 
}) => {
  if (!filme) {
    return (
      <TemplateDetFilmesPage currentPage={currentPage} onNavigate={onNavigate}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
          background: 'var(--theme-card-bg)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-2xl)',
          border: '1px solid var(--theme-border-color)',
          textAlign: 'center' as const
        }}>
          <div>
            <h1 style={{ 
              color: 'var(--theme-text-primary)', 
              marginBottom: 'var(--spacing-md)' 
            }}>
              Filme não encontrado
            </h1>
            <p style={{ 
              color: 'var(--theme-text-secondary)', 
              marginBottom: 'var(--spacing-lg)' 
            }}>
              O filme solicitado não foi encontrado.
            </p>
            <button 
              onClick={onVoltar}
              style={{
                background: 'var(--primary-color)',
                color: 'var(--text-white)',
                border: 'none',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer'
              }}
            >
              ← Voltar
            </button>
          </div>
        </div>
      </TemplateDetFilmesPage>
    );
  }

  return (
    <TemplateDetFilmesPage currentPage={currentPage} onNavigate={onNavigate}>
      <FilmeDetalhes filme={filme} onVoltar={onVoltar} />
    </TemplateDetFilmesPage>
  );
};

export default DetFilmesPage;