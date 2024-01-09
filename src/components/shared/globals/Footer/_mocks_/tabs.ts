import { MenuData } from '@services/Menu/useGet/types';

export const tabs = [
  {
    titulo: 'LICITACÕES',
    link: `/aconfederacao/licitacoes`,
    grupo: 'A CONFEDERAÇÃO',
  },
  {
    titulo: 'NOTÍCIAS',
    link: '/noticias',
    grupo: 'A CONFEDERAÇÃO',
  },
  {
    titulo: 'PROVAS',
    link: `/eventos/provas`,
    grupo: 'EVENTOS',
  },
  {
    titulo: 'RESULTADOS',
    link: '/eventos/resultados',
    grupo: 'EVENTOS',
  },
  {
    titulo: 'PARA PRESIDENTE',
    link: `/eleicoes/presidente`,
    grupo: 'ELEIÇÕES',
  },
  {
    titulo: 'PARA COMITÊ DE ATLETAS',
    link: `/eleicoes/atletas`,
    grupo: 'ELEIÇÕES',
  },
  {
    titulo: 'P/TÉCNICOS-INSTRUTORES',
    link: `/eleicoes/tecnicos_instrutores`,
    grupo: 'ELEIÇÕES',
  },
] as MenuData[];
