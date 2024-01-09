import { ReactElement } from 'react';
import * as React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isRequired?: boolean;
  onLeftIcon?: ReactElement;
  onRightIcon?: ReactElement;
  handleRightIconClick?: () => void;
  handleLeftIconClick?: () => void;
  label?: string;
  dataTestId?: string;
  className?: string;
  dataAutoCompare?: string;
  dataAutoConfirm?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Input({
  className = 'py-2',
  dataTestId,
  handleLeftIconClick,
  handleRightIconClick,
  isRequired,
  onLeftIcon,
  onRightIcon,
  onKeyUp,
  dataAutoCompare,
  dataAutoConfirm,
  value = undefined,
  ...rest
}: InputProps) {
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <div className={`w-full form-group`}>
      <input
        className={` px-4 w-full ${className}`}
        {...rest}
        onBlur={() => {
          setActive(false);
        }}
        onClick={() => {
          setActive(true);
        }}
        data-testid={dataTestId}
        type={rest.type}
        required={isRequired}
        placeholder={rest.placeholder}
        onFocus={rest.onFocus}
        readOnly={rest.readOnly}
        value={value}
        data-autocompare={dataAutoCompare}
        data-autoconfirm={dataAutoConfirm}
      />
    </div>
  );
}
