import { useQuery } from 'react-query';
import useGet from '.';
import { GetElectionsProps } from './types';

export default function useGetElections(queryString?: GetElectionsProps) {
  const { getElections } = useGet();

  async function handle() {
    const { data } = await getElections(queryString);
    return data;
  }

  const { data, ...rest } = useQuery(['elections-' + queryString?.tipo], handle);
  return { data: data || [], ...rest };
}
