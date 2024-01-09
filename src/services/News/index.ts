import { useServiceAxios } from '@hooks/useAxios';
import { NewsResponse, GetNewsProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries, setParams } = useRoutes();
  const { news } = apiRoutes;

  async function getNews({ newsId, ...queryString }: GetNewsProps) {
    return instance().get<NewsResponse>(
      setQueries({
        url: setParams({
          url: news.GET,
          data: {
            newsId,
          },
        }),
        query: queryString,
      }),
    );
  }

  return {
    getNews,
  };
}
