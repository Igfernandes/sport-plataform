import { DetailedHTMLProps, ReactNode, SelectHTMLAttributes } from 'react';

export type SelectProps = {
  option?: string;
  placeholder?: string;
  classFormGroup?: string;
  classSelect?: string;
  name: string;
  id?: string;
  maxLength?: number;
  required?: boolean;
  children?: ReactNode;
  options: ReactNode;
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
