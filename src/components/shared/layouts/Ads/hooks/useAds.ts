import { AdsResponse } from '@services/Ads/Get/types';
import useGetAds from '@services/Ads/Get/useGetAds';
import { useEffect, useState } from 'react';

export function useAds() {
  const { data, isFetched } = useGetAds();
  const [ads, setAds] = useState<AdsResponse>(data ?? []);

  useEffect(() => {
    setAds(data ?? []);
  }, [isFetched]);

  return {
    ads,
  };
}
