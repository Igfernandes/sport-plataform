export type NewsResponse = Array<NewsData>;

export type NewsData = {
  titulo: string;
  link: string;
  html?: string;
  banner: string;
  previa: string;
  acessibilidade?: string;
  criacao: string;
};

export type GetNewsProps = {
  newsId?: number;
  autor?: string;
  criacao?: string;
  legenda?: string;
};
