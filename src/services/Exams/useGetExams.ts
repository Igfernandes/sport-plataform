import { useQuery } from 'react-query';
import useGet from '.';
import { GetExamsProps } from './types';

export default function useGetExams(queryString?: GetExamsProps) {
  const { getExams } = useGet();

  async function handle() {
    const { data } = await getExams(queryString ?? {});
    return data;
  }

  const { data, ...rest } = useQuery(['exams'], handle);
  return { data: data || [], ...rest };
}
