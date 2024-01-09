import { useQuery } from 'react-query';
import useGet from '.';

export default function useGetFeaturedAthletes() {
  const { getFeaturedAthletes } = useGet();

  async function handle() {
    const { data } = await getFeaturedAthletes();
    return data;
  }

  const { data, ...rest } = useQuery(['featured_athletes'], handle);
  return { data: data || [], ...rest };
}
