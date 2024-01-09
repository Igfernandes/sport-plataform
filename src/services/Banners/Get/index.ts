import { useServiceAxios } from '@hooks/useAxios';
import { BannersResponse, GetBannersProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries } = useRoutes();
  const { banners } = apiRoutes;

  async function getBanners(queryString?: GetBannersProps) {
    return instance().get<BannersResponse>(
      setQueries({
        url: banners.GET,
        query: queryString,
      }),
    );
  }

  return {
    getBanners,
  };
}
