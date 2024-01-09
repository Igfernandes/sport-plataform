export type SchoolsResponse = Array<SchoolsData>;

export type SchoolsData = {
  contato: Array<ContactShape>;
  endereco: AddressShape;
  logo: string;
  nome: string;
};

export type ContactShape = { tipo: string; link: string };
type AddressShape = {
  bairro: string;
  cep: string;
  cidade: string;
  complemento: string;
  estado: string;
  logadouro: string;
  numero: string;
  pais: string;
};

export type GetSchoolsProps = {
  type?: 'club' | 'federation';
  SchoolId?: number;
  estado?: string;
  cidade?: string;
  federacao?: string;
};
