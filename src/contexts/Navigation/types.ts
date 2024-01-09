import { MenuResponse } from '@services/Menu/useGet/types';

export type NavigationContextProps = {
  isOpenWidgetModal: boolean;
  handleOpenWidgetModal: () => void;
  handleCloseWidgetModal: () => void;
  menu: MenuResponse;
  setMenu: React.Dispatch<React.SetStateAction<MenuResponse>>;
};
