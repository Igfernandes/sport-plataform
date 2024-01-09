import { useMutation, useQueryClient } from 'react-query';
import usePost from '.';
import { PostContactUsPayload, PostContactUsRequest } from './types';

export default function usePostContactUsMutate({ error, success }: PostContactUsRequest = {}) {
  const { postContactUs } = usePost();
  const queryClient = useQueryClient();

  async function handleMutate(payload: PostContactUsPayload) {
    const { data } = await postContactUs(payload);
    return data;
  }

  return useMutation(handleMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(['contact-us']);
      queryClient.refetchQueries();

      if (success) success();
    },
    onError: error,
  });
}
