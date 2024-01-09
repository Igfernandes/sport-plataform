import { useServiceAxios } from '@hooks/useAxios';
import { FilesResponse, GetFilesProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries } = useRoutes();
  const { files } = apiRoutes;

  async function getFiles(queryString: GetFilesProps) {
    return instance().get<FilesResponse>(
      setQueries({
        url: files.GET,
        query: queryString,
      }),
    );
  }

  return {
    getFiles,
  };
}
