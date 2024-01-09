import { useServiceAxios } from '@hooks/useAxios';
import { AdsResponse, GetAdsProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries } = useRoutes();
  const { ads } = apiRoutes;

  async function getAds(queryString?: GetAdsProps) {
    return instance().get<AdsResponse>(
      setQueries({
        url: ads.GET,
        query: queryString,
      }),
    );
  }

  return {
    getAds,
  };
}
