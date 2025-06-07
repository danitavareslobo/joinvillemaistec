import type { ReactNode } from 'react';

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isLight: boolean;
  isDark: boolean;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export interface Filme {
  id: number;
  nome: string;
  imagem: string;
  genero: string;
  idadeIndicada: string;
  sinopse: string;
  duracao?: string;
  diretor?: string;
  ano?: number;
}

export interface FilmeCardProps {
  filme: Filme;
  onVerMais: (id: number) => void;
}

export interface FilmeGridProps {
  filmes: Filme[];
  onVerMais: (id: number) => void;
}

export interface FilmeDetalhesProps {
  filme: Filme;
  onVoltar: () => void;
}

export interface ContatoFormData {
  email: string;
  assunto: string;
  mensagem: string;
  urgencia: boolean;
}