export type ElectionsResponse = Array<ElectionsData>;

export type TypeElections = 'athlete' | 'president' | 'technical';
export type ElectionsData = {
  id: number;
  titulo: string;
  tipo: string;
  grupo: string;
  inicio: string | Date;
  termino: string | Date;
  candidatos: Array<CandidateShape>;
};

export type CandidateShape = {
  nome: string;
  foto: string;
  data_nasc: string | Date;
  clube: string;
  federacao: string;
};

export type GetElectionsProps = {
  tipo: String;
  legenda?: string;
  autor?: string;
};
