import { useEffect, useState } from 'react';
import { ElectionsHookProps } from '../type';
import useGetElections from '@services/Elections/Get/useGetElections';

/**
 * @function useEleicoes
 * - O hook serve para o componente Eleicoes
 */

export function useElections({ type }: ElectionsHookProps) {
  const types = {
    athlete: 'PARA COMITÊ DE ATLETAS',
    president: 'PRESIDENTE',
    technical: 'PARA COMITE DE TÉCNICOS-INSTRUTORES',
  };
  const { data, isFetched } = useGetElections({
    tipo: types[type] as String,
  });
  const [elections, setElections] = useState(data ?? []);

  useEffect(() => {
    setElections(data ?? []);
  }, [isFetched]);

  return {
    elections,
  };
}
