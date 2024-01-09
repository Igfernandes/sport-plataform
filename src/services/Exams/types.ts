export type ExamsResponse = Array<ExamsData>;

export type ExamsData = {
  id: string;
  sexo: string;
  categoria: string;
  classificacao: string;
  limite_vagas: string;
  taxa: string;
  eventos: EventShape;
  federacao: string;
  inscricao: PeriodsShape;
  realizacao: PeriodsShape;
};

export type EventShape = {
  nome: string;
  tipo: string;
  requisitos: string;
  status: string;
  observacao: string;
  descricao: string;
  banner: string;
  categoria_taxa: string;
  criacao: string | Date;
  atualizacao: string | Date;
};

export type PeriodsShape = {
  inicio: string;
  termino: string;
};
export type GetExamsProps = {
  examId?: number;
  autor?: string;
  criacao?: string;
  legenda?: string;
};
