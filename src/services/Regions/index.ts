import { useServiceAxios } from '@hooks/useAxios';
import { RegionsResponse, GetRegionsProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries } = useRoutes();
  const { regions } = apiRoutes;

  async function getRegions(queryString: GetRegionsProps) {
    return instance().get<RegionsResponse>(
      setQueries({
        url: regions.GET,
        query: queryString,
      }),
    );
  }

  return {
    getRegions,
  };
}
