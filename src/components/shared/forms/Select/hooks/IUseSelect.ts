import { Dispatch } from 'react';

export interface IUseSelect {
  isLoading: boolean;
  setIsLoading: Dispatch<(prevState: boolean) => boolean>;
}
