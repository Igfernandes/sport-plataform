import { ReactNode } from 'react';

export type FormGroupProps = {
  label?: string;
  labelContent?: ReactNode;
  type?: string;
  placeholder?: string;
  classGroup?: ClassName;
  name?: string;
  id?: string;
  maxLength?: number;
  stylelabel?: any;
  htmlfor?: string;
  required?: boolean;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type ClassName = {
  formGroup?: string;
  input?: string;
  label?: string;
};
