export type RegionsResponse = Array<any>;

export type RegionsDataStates = {
  Capital: string;
  Estado: string;
  UF: string;
};

export type RegionsDataCity = Array<string>;

export type RegionsDataCountry = {
  CodigoArea: string;
  Pais: string;
  Sigla: string;
};

export type GetRegionsProps = {
  type: 'country' | 'state' | 'city';
  state?: string;
};
