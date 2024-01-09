export type AdsResponse = Array<AdsData>;

export type AdsData = {
  link: string;
  descricao: string;
  preview: string;
};

export type GetAdsProps = {
  post_id?: number;
};
