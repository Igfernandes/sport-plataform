export type AdversesResponse = Array<AdversesData>;

export type AdversesData = {
  titulo: string;
  link: string;
  banner: string;
  conteudo: string;
  acessibilidade?: string;
  criacao: string;
};

export type AdversesShape = {
  titulo: string;
  link: string;
  data: string;
};

export type GetAdversesProps = {
  slug?: string;
  id_pagina?: number;
};
