import { useQuery } from 'react-query';
import useGet from '.';
import { GetGalleriesProps } from './types';

export default function useGetGalleries(queryString?: GetGalleriesProps) {
  const { getGalleries } = useGet();

  async function handle() {
    const { data } = await getGalleries(queryString ?? {});
    return data;
  }

  const { data, ...rest } = useQuery(['galleries'], handle);
  return { data: data || [], ...rest };
}
