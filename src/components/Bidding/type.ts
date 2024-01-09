import { BiddingStatus } from '@services/Bidding/Get/types';

export type IsDisponibleInscribesProps = {
  inicio: string | Date;
  termino: string | Date;
  status: BiddingStatus;
};
