export type BannersResponse = Array<BannersData>;

export type BannersData = {
  url: string;
  legenda: string;
  autor: string;
};

export type GetBannersProps = {
  legenda?: string;
  autor?: string;
};
