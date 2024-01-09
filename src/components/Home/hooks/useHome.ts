import { NewsData } from '@services/News/types';
import useGetNews from '@services/News/useGetNews';
import { useEffect, useState } from 'react';

export function useHome() {
  const { data, isFetched } = useGetNews();
  const [news, setNews] = useState<Array<NewsData>>(data ?? []);

  useEffect(() => {
    setNews(data ?? []);
  }, [isFetched]);

  return {
    news,
  };
}
