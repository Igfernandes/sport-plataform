import { DetailedHTMLProps, ReactNode, SelectHTMLAttributes } from 'react';

export type SelectGroupProps = {
  label?: string;
  labelContent?: ReactNode;
  placeholder?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  stylelabel?: any;
  htmlfor?: string;
  required?: boolean;
  children?: ReactNode;
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
