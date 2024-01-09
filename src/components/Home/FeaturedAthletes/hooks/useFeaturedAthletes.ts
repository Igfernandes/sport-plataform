import { FeaturedAthletesDataResponse } from '@services/FeaturedAthletes/types';
import useGetFeaturedAthletes from '@services/FeaturedAthletes/useGetFeaturedAthletes';
import { useEffect, useState } from 'react';

export function useFeaturedAthletes() {
  const { data, isFetching } = useGetFeaturedAthletes();
  const [athletes, setAthletes] = useState<FeaturedAthletesDataResponse>(data ?? []);

  useEffect(() => {
    setAthletes(data ?? []);
  }, [isFetching]);

  return {
    athletes,
  };
}
