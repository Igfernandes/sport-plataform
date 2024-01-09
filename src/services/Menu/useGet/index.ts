import { useServiceAxios } from '@hooks/useAxios';
import { MenuResponse, GetMenuProps } from './types';
import { useRoutes } from '@hooks/useRoutes';
import { apiRoutes } from '@services/apiRoutes';

export default function useGet() {
  const { instance } = useServiceAxios();
  const { setQueries } = useRoutes();
  const { menu } = apiRoutes;

  async function getMenu(queryString?: GetMenuProps) {
    return instance().get<MenuResponse>(
      setQueries({
        url: menu.GET,
        query: queryString,
      }),
    );
  }

  return {
    getMenu,
  };
}
