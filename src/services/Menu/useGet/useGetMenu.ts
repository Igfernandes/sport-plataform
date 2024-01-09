import { useQuery } from 'react-query';
import useGet from '.';
import { GetMenuProps } from './types';

export default function useGetMenu(queryString?: GetMenuProps) {
  const { getMenu } = useGet();

  async function handle() {
    const { data } = await getMenu(queryString);
    return data;
  }

  const { data, ...rest } = useQuery(['menu'], handle);
  return { data: data || [], ...rest };
}
