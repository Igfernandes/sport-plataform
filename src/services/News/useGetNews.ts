import { useQuery } from 'react-query';
import useGet from '.';
import { GetNewsProps } from './types';

export default function useGetNews(queryString?: GetNewsProps) {
  const { getNews } = useGet();

  async function handle() {
    const { data } = await getNews(queryString ?? {});
    return data;
  }

  const { data, ...rest } = useQuery(['news'], handle);
  return { data: data || [], ...rest };
}
