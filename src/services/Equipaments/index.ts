import { useServiceAxios } from '@hooks/useAxios';
import { EquipamentsResponse, GetEquipamentsProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries, setParams } = useRoutes();
  const { equipaments } = apiRoutes;

  async function getEquipaments({ equipamentId, ...queryString }: GetEquipamentsProps) {
    return instance().get<EquipamentsResponse>(
      setQueries({
        url: setParams({
          url: equipaments.GET,
          data: {
            equipamentId,
          },
        }),
        query: queryString,
      }),
    );
  }

  return {
    getEquipaments,
  };
}
