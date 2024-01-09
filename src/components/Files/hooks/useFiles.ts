import { FilesResponse } from '@services/Files/types';
import useGetFiles from '@services/Files/useGetFiles';
import { useEffect, useState } from 'react';

export function useFiles(slug?: string) {
  const { data, isFetched } = useGetFiles({ slug });
  const [files, setFiles] = useState<FilesResponse>(data ?? []);

  useEffect(() => {
    setFiles(data ?? []);
  }, [isFetched, data]);
 
  return {
    files,
  };
}
