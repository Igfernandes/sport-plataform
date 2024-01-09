import { useServiceAxios } from '@hooks/useAxios';
import { PostBiddingPayload, PostBiddingResponse } from './types';
import { apiRoutes } from '@services/apiRoutes';
import { useRoutes } from '@hooks/useRoutes';

export default function usePost() {
  const { instance } = useServiceAxios({
    headers: {
      'content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
    },
  });
  const { bidding } = apiRoutes;
  const { setParams } = useRoutes();

  async function postBidding({ licitacao, ...props }: PostBiddingPayload) {
    const payload = new FormData();

    Object.entries(props).forEach(([label, value]) => {
      /** @ts-ignore  */
      payload.append(label, value);
    });

    return instance().post<PostBiddingResponse>(
      setParams({
        url: bidding.POST,
        data: {
          licitacao,
        },
      }),
      props,
    );
  }

  return {
    postBidding,
  };
}
