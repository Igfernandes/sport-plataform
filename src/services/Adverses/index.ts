import { useServiceAxios } from '@hooks/useAxios';
import { AdversesResponse, GetAdversesProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries } = useRoutes();
  const { adverses } = apiRoutes;

  async function getAdverses(queryString: GetAdversesProps) {
    return instance().get<AdversesResponse>(
      setQueries({
        url: adverses.GET,
        query: queryString,
      }),
    );
  }

  return {
    getAdverses,
  };
}
