import { useQuery } from 'react-query';
import useGet from '.';
import { GetEquipamentsProps } from './types';

export default function useGetEquipaments(queryString?: GetEquipamentsProps) {
  const { getEquipaments } = useGet();

  async function handle() {
    const { data } = await getEquipaments(queryString ?? {});
    return data;
  }

  const { data, ...rest } = useQuery(['equipaments'], handle);
  return { data: data || null, ...rest };
}
