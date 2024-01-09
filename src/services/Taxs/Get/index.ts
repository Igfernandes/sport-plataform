import { useServiceAxios } from '@hooks/useAxios';
import { TaxsResponse, GetTaxsProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries, setParams } = useRoutes();
  const { taxs } = apiRoutes;

  async function getTaxs({ taxId, ...queryString }: GetTaxsProps) {
    return instance().get<TaxsResponse>(
      setQueries({
        url: setParams({
          url: taxs.GET,
          data: {
            taxId,
          },
        }),
        query: queryString,
      }),
    );
  }

  return {
    getTaxs,
  };
}
