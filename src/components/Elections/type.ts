import { TypeElections } from '@services/Elections/Get/types';

export type ElectionsHookProps = {
  type: TypeElections;
};

export type ElectionsProps = {
  type: TypeElections;
  title: string;
};
