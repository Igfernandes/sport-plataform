import { NavigationContextProps } from '@contexts/Navigation/types';
import { MenuResponse } from '@services/Menu/useGet/types';
import useGetMenu from '@services/Menu/useGet/useGetMenu';
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

type NavigationProviderProps = {
  children: ReactNode;
};

export const NavigationContext = createContext<NavigationContextProps>(
  {} as NavigationContextProps,
);

export default function NavigationProvider({ children }: NavigationProviderProps) {
  const [isOpenWidgetModal, setIsOpenWidgetModal] = useState<boolean>(false);
  const { data, isFetched } = useGetMenu();
  const [menu, setMenu] = useState<MenuResponse>(data ?? []);

  useEffect(() => {
    setMenu(data ?? []);
  }, [isFetched]);

  function handleOpenWidgetModal() {
    setIsOpenWidgetModal(true);
  }

  function handleCloseWidgetModal() {
    setIsOpenWidgetModal(false);
  }

  const contextValue: NavigationContextProps = useMemo(
    () => ({
      handleOpenWidgetModal,
      handleCloseWidgetModal,
      isOpenWidgetModal,
      menu,
      setMenu,
    }),
    [menu],
  );

  return <NavigationContext.Provider value={contextValue}>{children}</NavigationContext.Provider>;
}

export const useNavigationContext = () => useContext(NavigationContext);
