import { useServiceAxios } from '@hooks/useAxios';
import { FeaturedAthletesDataResponse } from './types';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { featuredAthletes } = apiRoutes;

  async function getFeaturedAthletes() {
    return instance().get<FeaturedAthletesDataResponse>(featuredAthletes.GET);
  }

  return {
    getFeaturedAthletes,
  };
}
