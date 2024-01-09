import { useServiceAxios } from '@hooks/useAxios';
import { SchoolsResponse, GetSchoolsProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries, setParams } = useRoutes();
  const { schools } = apiRoutes;

  async function getSchools({ SchoolId, type = 'club', ...queryString }: GetSchoolsProps) {
    return instance().get<SchoolsResponse>(
      setQueries({
        url: setParams({
          url: schools.GET[type],
          data: {
            SchoolId,
          },
        }),
        query: queryString,
      }),
    );
  }

  return {
    getSchools,
  };
}
