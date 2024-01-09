export type BiddingResponse = Array<BiddingData>;

export type BiddingData = {
  id: number;
  titulo: string;
  termino: string | Date;
  status: BiddingStatus;
  inicio: string | Date;
  descricao: string;
  inscricoes: number;
};

export type GetBiddingProps = {
  biddingId?: number;
  autor?: string;
  titulo?: string;
  termino?: string;
  status?: string;
};

export type BiddingStatus =
  | 'Recebimento de Propostas'
  | 'Recebimento de Documentos'
  | 'Análises de propostas'
  | 'Análises de documentos'
  | 'Finalizada';
