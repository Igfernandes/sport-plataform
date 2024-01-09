export type TaxsResponse = TaxsData;

export type TaxsData = {
  titulo: string;
  slug: string;
  taxs: Array<TaxShape>;
};

export type TaxShape = {
  titulo?: string;
  descricao?: string;
  preview?: string;
};

export type GetTaxsProps = {
  taxId?: number;
  titulo?: string;
  criacao?: string;
};
