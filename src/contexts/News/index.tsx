import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { NewsContextProps } from './types';
import { NewsData } from '@services/News/types';
import useGetNews from '@services/News/useGetNews';
import { MOCKS_NEWS } from '@components/shared/layouts/News/__mocks__/news';

type NewsProviderProps = {
  children: ReactNode;
};

export const NewsContext = createContext<NewsContextProps>({} as NewsContextProps);

export default function NewsProvider({ children }: NewsProviderProps) {
  const { data, isFetched } = useGetNews();
  const [news, setNews] = useState<Array<NewsData>>(MOCKS_NEWS);
  const [currentNews, setCurrentNews] = useState<NewsData>();

  useEffect(() => {
    setNews(MOCKS_NEWS);
  }, [isFetched]);

  useEffect(() => {
    setCurrentNews(news[0]);
  }, [news, isFetched]);

  const contextValue: NewsContextProps = useMemo(
    () => ({
      news,
      currentNews,
      setCurrentNews,
    }),
    [news, currentNews],
  );

  return <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>;
}

export const useNewsContext = () => useContext(NewsContext);
