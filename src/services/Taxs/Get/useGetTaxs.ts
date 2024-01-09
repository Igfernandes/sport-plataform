import { useQuery } from 'react-query';
import useGet from '.';
import { GetTaxsProps } from './types';

export default function useGetTaxs(queryString?: GetTaxsProps) {
  const { getTaxs } = useGet();

  async function handle() {
    const { data } = await getTaxs(queryString ?? {});
    return data;
  }

  const { data, ...rest } = useQuery(['taxs'], handle);
  return { data: data || [], ...rest };
}
