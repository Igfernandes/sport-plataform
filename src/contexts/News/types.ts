import { NewsData } from '@services/News/types';

export type NewsContextProps = {
  news: Array<NewsData>;
  currentNews: NewsData | undefined;
  setCurrentNews: React.Dispatch<React.SetStateAction<NewsData | undefined>>;
};
