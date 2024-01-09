import { useEffect, useState } from 'react';
import { IsDisponibleInscribesProps } from '../type';
import useGetBidding from '@services/Bidding/Get/useGetBidding';
import { BiddingResponse } from '@services/Bidding/Get/types';

export function useBidding() {
  const { data, isFetched } = useGetBidding();
  const [bidding, setBidding] = useState<BiddingResponse>(data ?? []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [id, setId] = useState<number>(0);
  const biddingStatus = [
    'Recebimento de Propostas',
    'Recebimento de Documentos',
    'Análises de propostas',
    'Análises de documentos',
    'Finalizada',
  ];

  useEffect(() => {
    setBidding(data ?? []);
  }, [isFetched]);

  const isDisponibleInscribes = ({ inicio, termino, status }: IsDisponibleInscribesProps) => {
    const todayDate = new Date().getTime();

    return (
      todayDate >= new Date(inicio).getTime() ||
      (todayDate <= new Date(termino).getTime() && status != 'Finalizada')
    );
  };

  return {
    bidding,
    biddingStatus,
    show,
    handleClose,
    handleShow,
    id,
    setId,
    isDisponibleInscribes,
  };
}
