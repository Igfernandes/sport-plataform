export type FilesResponse = Array<FilesData>;

export type FilesData = {
  titulo: string;
  link: string;
  banner: string;
  arquivos: Array<FilesShape>;
  acessibilidade?: string;
  criacao: string;
};

export type FilesShape = {
  titulo: string;
  link: string;
  data: string;
};

export type GetFilesProps = {
  slug?: string;
  id_pagina?: number;
};
