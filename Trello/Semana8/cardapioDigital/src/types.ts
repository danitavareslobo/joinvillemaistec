import type { CategoriaType } from './utils';

export interface BaseCardapioItem {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
  descricao: string;
}

export interface GnocchiItem extends BaseCardapioItem {}

export interface PastaItem extends BaseCardapioItem {
  molhosPermitidos: string[];
}

export interface BebidaItem extends BaseCardapioItem {
  categoria: CategoriaType;
}

export type { CategoriaType };

export interface MolhoInfo {
  nome: string;
  descricao: string;
  disponivel: string[];
}

export interface MolhoOption {
  id: number;
  nome: string;
  descricao: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface ColorProps {
  color?: string;
}

export interface AnimationProps {
  delay?: number;
}

export type VoidCallback = () => void;

export type ScrollFunction = (sectionId: string) => void;

export interface CardProps extends AnimationProps {
  item: BaseCardapioItem;
  onOrderClick?: VoidCallback;
}