import type { Filme } from '../types';

export const filmesMock: Filme[] = [
  {
    id: 1,
    nome: "Vingadores: Ultimato",
    imagem: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
    genero: "Ação",
    idadeIndicada: "12+",
    sinopse: "Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido às ações de Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez para desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importa quais sejam as consequências.",
    duracao: "181 min",
    diretor: "Anthony e Joe Russo",
    ano: 2019
  },
  {
    id: 2,
    nome: "Coringa",
    imagem: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    genero: "Drama",
    idadeIndicada: "16+",
    sinopse: "Arthur Fleck é um homem desesperançoso num mundo que o abandona e o trata com crueldade. Uma vez que ele embarca em uma espiral descendente de revolução e crime sangrento, isso o leva face a face com seu alter-ego: o Coringa.",
    duracao: "122 min",
    diretor: "Todd Phillips",
    ano: 2019
  },
  {
    id: 3,
    nome: "Parasita",
    imagem: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop",
    genero: "Thriller",
    idadeIndicada: "16+",
    sinopse: "Toda a família de Ki-taek está desempregada, vivendo em um porão. Quando seu filho consegue um emprego como tutor de inglês para a filha de uma família rica, as duas famílias acabam se envolvendo em uma série de eventos inesperados.",
    duracao: "132 min",
    diretor: "Bong Joon-ho",
    ano: 2019
  },
  {
    id: 4,
    nome: "Duna",
    imagem: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=600&fit=crop",
    genero: "Ficção Científica",
    idadeIndicada: "12+",
    sinopse: "Paul Atreides, um jovem brilhante e talentoso nascido para um grande destino além de sua compreensão, deve viajar para o planeta mais perigoso do universo para garantir o futuro de sua família e seu povo.",
    duracao: "155 min",
    diretor: "Denis Villeneuve",
    ano: 2021
  },
  {
    id: 5,
    nome: "Spider-Man: Através do Aranhaverso",
    imagem: "https://images.unsplash.com/photo-1635863138275-d9864d95c1ec?w=400&h=600&fit=crop",
    genero: "Animação",
    idadeIndicada: "Livre",
    sinopse: "Miles Morales retorna para a próxima aventura na saga do Aranhaverso. Depois de se reunir com Gwen Stacy, ele é catapultado através do Multiverso, onde encontra uma equipe de Homens-Aranha encarregados de proteger sua própria existência.",
    duracao: "140 min",
    diretor: "Joaquim Dos Santos",
    ano: 2023
  },
  {
    id: 6,
    nome: "Top Gun: Maverick",
    imagem: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=600&fit=crop",
    genero: "Ação",
    idadeIndicada: "12+",
    sinopse: "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete 'Maverick' Mitchell está onde pertence, ultrapassando os limites como um piloto de teste corajoso e esquivando-se do avanço na classificação que o aterraria.",
    duracao: "130 min",
    diretor: "Joseph Kosinski",
    ano: 2022
  }
];

export const getFilmeById = (id: number): Filme | undefined => {
  return filmesMock.find(filme => filme.id === id);
};