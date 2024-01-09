import { GalleriesResponse } from '@services/Galleries/types';
import useGetGalleries from '@services/Galleries/useGetGalleries';
import { useEffect, useState } from 'react';

export function useGalleries() {
  const { data, isFetched } = useGetGalleries();
  const [galleries, setGalleries] = useState<GalleriesResponse>(data ?? []);

  useEffect(() => {
    setGalleries(data ?? []);
  }, [isFetched]);

  return {
    galleries,
  };
}
