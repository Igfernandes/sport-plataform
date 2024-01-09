import { useQuery } from 'react-query';
import useGet from '.';
import { GetSchoolsProps } from './types';

export default function useGetSchools(queryString?: GetSchoolsProps) {
  const { getSchools } = useGet();

  async function handle() {
    const { data } = await getSchools(queryString ?? {});
    return data;
  }

  const { data, ...rest } = useQuery(['schools'+ queryString?.type], handle);
  return { data: data || [], ...rest };
}
