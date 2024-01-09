export type PostBiddingPayload = {
  docs: Array<File>;
  logotype: File;
  name: string;
  company: string;
  cnpj: string;
  phone: string;
  state: string;
  city: string;
  district: string;
  complement: string;
  email: string;
  notes: string;
  licitacao: number;
};

export type PostBiddingRequest = {
  success: () => void;
  error: () => void;
};

export type PostBiddingResponse = {
  success: boolean;
};
