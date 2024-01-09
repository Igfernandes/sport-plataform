import { useQuery } from 'react-query';
import useGet from '.';
import { GetRegionsProps } from './types';

export default function useGetRegions(queryString: GetRegionsProps) {
  const { getRegions } = useGet();

  async function handle() {
    const { data } = await getRegions(queryString);
    return data;
  }

  const { data, ...rest } = useQuery([queryString.type], handle);
  return { data:  data || [], ...rest };
}
