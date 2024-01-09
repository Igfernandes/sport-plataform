import { useState } from 'react';
import { IUseSelect } from './IUseSelect';

/**
 * @function useSelect
 * - O hook serve para o componente Select
 */

export function useSelect(): IUseSelect {
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    setIsLoading,
  };
}
