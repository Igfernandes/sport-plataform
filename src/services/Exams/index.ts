import { useServiceAxios } from '@hooks/useAxios';
import { ExamsResponse, GetExamsProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries, setParams } = useRoutes();
  const { exams } = apiRoutes;

  async function getExams({ examId, ...queryString }: GetExamsProps) {
    return instance().get<ExamsResponse>(
      setQueries({
        url: setParams({
          url: exams.GET,
          data: {
            examId,
          },
        }),
        query: queryString,
      }),
    );
  }

  return {
    getExams,
  };
}
