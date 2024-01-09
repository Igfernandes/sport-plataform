import { useQuery } from 'react-query';
import useGet from '.';
import { GetAdversesProps } from './types';

export default function useGetAdverses(queryString?: GetAdversesProps) {
  const { getAdverses } = useGet();

  async function handle() {
    const { data } = await getAdverses(queryString ?? {});
    return data;
  }

  const { data, ...rest } = useQuery(['adverses:'+(queryString?.slug ?? 'index')], handle);
  return { data: data || [], ...rest };
}
