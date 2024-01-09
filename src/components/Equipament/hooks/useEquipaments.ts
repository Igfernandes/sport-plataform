import { EquipamentsResponse } from '@services/Equipaments/types';
import useGetEquipaments from '@services/Equipaments/useGetEquipaments';
import { useEffect, useState } from 'react';

export function useEquipaments() {
  const { data, isFetched } = useGetEquipaments();
  const [equipaments, setEquipaments] = useState<EquipamentsResponse | null>(data);

  useEffect(() => {
    setEquipaments(data as EquipamentsResponse);
  }, [isFetched, data]);

  return {
    equipaments,
  };
}
