import { useServiceAxios } from '@hooks/useAxios';
import { BiddingResponse, GetBiddingProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries, setParams } = useRoutes();
  const { bidding } = apiRoutes;

  async function getBidding({ biddingId, ...queryString }: GetBiddingProps) {
    return instance().get<BiddingResponse>(
      setQueries({
        url: setParams({
          url: bidding.GET,
          data: {
            biddingId,
          },
        }),
        query: queryString,
      }),
    );
  }

  return {
    getBidding,
  };
}
