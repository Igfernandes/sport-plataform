import { useQuery } from 'react-query';
import useGet from '.';
import { GetFilesProps } from './types';

export default function useGetFiles(queryString?: GetFilesProps) {
  const { getFiles } = useGet();

  async function handle() {
    const { data } = await getFiles(queryString ?? {});
    return data;
  }

  const { data, ...rest } = useQuery(['files:' + (queryString?.slug?.replaceAll(" ", "") ?? '')], handle);
  return { data: data || [], ...rest };
}
