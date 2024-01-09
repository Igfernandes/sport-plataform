export type MenuResponse = Array<MenuData>;

export type MenuData = {
  titulo: string;
  link: string;
  grupo: string;
  tipo: string;
};

export type GetMenuProps = {
  titulo: string;
  modelo: string;
};
