export type FeaturedAthletesDataResponse = Array<FeaturedAthletesData>;

export type FeaturedAthletesData = {
  id: number;
  nome: string;
  foto: string;
  federacao?: InstitutionalShape;
  clube?: InstitutionalShape;
  redes_sociais: Array<SocialMediaShape>;
};

type InstitutionalShape = {
  name: string;
  logo: string;
};

type SocialMediaShape = {
  tipo: string;
  link: string;
};
