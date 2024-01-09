import { useServiceAxios } from '@hooks/useAxios';
import { ElectionsResponse, GetElectionsProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries } = useRoutes();
  const { elections } = apiRoutes;

  async function getElections(queryString?: GetElectionsProps) {
    return instance().get<ElectionsResponse>(
      setQueries({
        url: elections.DATA,
        query: queryString,
      }),
    );
  }

  return {
    getElections,
  };
}
