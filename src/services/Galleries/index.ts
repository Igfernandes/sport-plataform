import { useServiceAxios } from '@hooks/useAxios';
import { GalleriesResponse, GetGalleriesProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries } = useRoutes();
  const { galleries } = apiRoutes;

  async function getGalleries(queryString: GetGalleriesProps) {
    return instance().get<GalleriesResponse>(
      setQueries({
        url: galleries.GET,
        query: queryString,
      }),
    );
  }

  return {
    getGalleries,
  };
}
