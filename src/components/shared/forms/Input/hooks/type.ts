export type InputProps = {
  label: string;
  type: string;
  placeholder?: string;
  className: ClassName;
  name: string;
  id?: string;
  maxLength?: number;
  required?: boolean;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type ClassName = {
  formGroup?: string;
  input?: string;
  label?: string;
};
