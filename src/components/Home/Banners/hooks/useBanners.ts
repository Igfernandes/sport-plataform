import useGetBanners from '@services/Banners/Get/useGetBanners';
import { BannersResponse } from '@services/Banners/Get/types';
import { useEffect, useState } from 'react';

export function useBanners() {
  const { data, isFetched } = useGetBanners();
  const [banners, setBanners] = useState<BannersResponse>([]);

  useEffect(() => {
    setBanners(data ?? []);
  }, [isFetched]);

  return {
    banners,
  };
}
