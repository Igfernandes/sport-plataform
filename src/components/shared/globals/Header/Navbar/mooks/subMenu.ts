import { MenuResponse } from '@services/Menu/useGet/types';

export const subMenu = [
  // {
  //   grupo: 'A CONFEDERAÇÃO',
  //   link: 'aconfederacao/licitacoes',
  //   titulo: 'LICITACÕES',
  // },
  {
    grupo: 'A CONFEDERAÇÃO',
    link: 'noticias',
    titulo: 'NOTÍCIAS',
  },
  {
    grupo: 'EVENTOS',
    link: 'provas',
    titulo: 'PROVAS',
  },
  // {
  //   grupo: 'EVENTOS',
  //   link: 'resultados',
  //   titulo: 'RESULTADOS',
  // },
  {
    grupo: 'EVENTOS',
    link: 'galerias',
    titulo: 'GALERIAS',
  },
  {
    grupo: 'ELEIÇÕES',
    link: 'presidente',
    titulo: 'PARA PRESIDENTE'
  },
  {
    grupo: 'ELEIÇÕES',
    link: 'atletas',
    titulo: 'PARA COMITÊ DE ATLETAS'
  },
  {
    grupo: 'ELEIÇÕES',
    link: 'tecnicos_instrutores',
    titulo: 'P/TÉCNICOS-INSTRUTORES'
  },
  {
    grupo: 'ESPORTE',
    link: 'modalidades',
    titulo: 'MODALIDADES'
  },
  {
    grupo: 'ESPORTE',
    link: 'historia',
    titulo: 'HISTÓRIA'
  },
  {
    grupo: 'ESPORTE',
    link: 'conquistas',
    titulo: 'CONQUISTAS'
  }
] as MenuResponse;
