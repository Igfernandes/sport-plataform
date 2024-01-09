import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

export function Label(
  props: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
) {
  const { className, children, htmlFor } = props;

  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
