export type GalleriesResponse = Array<GalleriesData>;

export type GalleriesData = {
  titulo: string;
  link: string;
  banner: string;
  photos: Array<GalleriesShape>;
  acessibilidade?: string;
  criacao: string;
};

export type GalleriesShape = {
  titulo: string;
  link: string;
  data: string;
};

export type GetGalleriesProps = {
  slug?: string;
  id_pagina?: number;
};
