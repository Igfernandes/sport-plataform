import { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from 'react';

export type TextAreaGroupProps = {
  label: string;
  textarea?: string;
  placeholder?: string;
  className: ClassName;
  name: string;
  id?: string;
  maxLength?: number;
  required?: boolean;
  children?: ReactNode;
  onChange?: (ev: any) => void;
};

export type ClassName = {
  formGroup?: string;
  textArea?: string;
  label?: string;
};
