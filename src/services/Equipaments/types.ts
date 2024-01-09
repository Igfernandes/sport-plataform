export type EquipamentsResponse = EquipamentsData;

export type EquipamentsData = {
  titulo: string;
  conteudo: string;
  banner: string;
  equipamentos: Array<EquipamentsShape>;
};

export type EquipamentsShape = {
  titulo: string;
  descricao?: string;
  ilustracao: string;
};

export type GetEquipamentsProps = {
  equipamentId?: number;
  criacao?: string;
};
