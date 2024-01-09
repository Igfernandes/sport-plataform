import { useServiceAxios } from '@hooks/useAxios';
import { PostContactUsPayload, PostContactUsResponse } from './types';
import { apiRoutes } from '@services/apiRoutes';

export default function usePost() {
  const { instance } = useServiceAxios();
  const { contactUs } = apiRoutes;

  async function postContactUs(payload: PostContactUsPayload) {
    return instance().post<PostContactUsResponse>(contactUs.POST, payload);
  }

  return {
    postContactUs,
  };
}
