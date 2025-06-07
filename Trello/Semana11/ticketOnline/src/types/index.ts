export interface Filme {
  id: number;
  nome: string;
  imagem: string;
  genero: string;
  idadeIndicada: string;
  sinopse: string;
  duracao: string;
  diretor: string;
  ano: number;
}

export interface ContatoForm {
  email: string;
  assunto: string;
  mensagem: string;
  urgencia?: boolean;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}