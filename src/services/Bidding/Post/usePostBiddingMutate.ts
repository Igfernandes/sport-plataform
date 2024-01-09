import { useMutation, useQueryClient } from 'react-query';
import usePost from '.';
import { PostBiddingPayload, PostBiddingRequest } from './types';

export default function usePostBiddingMutate({ error, success }: PostBiddingRequest) {
  const { postBidding } = usePost();
  const queryClient = useQueryClient();

  async function handleMutate(payload: PostBiddingPayload) {
    const { data } = await postBidding(payload);
    return data;
  }

  return useMutation(handleMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(['bidding']);
      queryClient.refetchQueries();

      success();
    },
    onError: error,
  });
}
