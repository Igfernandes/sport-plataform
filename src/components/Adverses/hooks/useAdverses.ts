import { AdversesData } from '@services/Adverses/types';
import useGetAdverses from '@services/Adverses/useGetAdverses';
import { useEffect, useState } from 'react';

export function useAdverses(slug?: string) {
  const { data, isFetched } = useGetAdverses({ slug });
  const [adverses, setAdverses] = useState<AdversesData>();

  useEffect(() => {
    setAdverses(data[0]);
  }, [isFetched, data]);

  return {
    adverses,
  };
}
