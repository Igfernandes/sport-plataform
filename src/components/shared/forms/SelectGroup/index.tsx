import { Label } from '../Label';
import { Select } from '../Select';
import { SelectGroupProps } from './type';

export function SelectGroup({
  label,
  placeholder,
  className,
  name,
  id,
  maxLength,
  labelContent,
  stylelabel,
  htmlfor,
  required,
  children,
  ...restSelect
}: SelectGroupProps) {
  return (
    <div className={`items-center  form-group ${className}`}>
      <Label style={stylelabel} className={className} htmlFor={htmlfor}>
        {label} {labelContent}
      </Label>
      <Select
        id={id}
        name={`${name}`}
        maxLength={maxLength}
        classSelect={'form-control'}
        placeholder={placeholder}
        required={required}
        options={children}
        {...restSelect}
      />
    </div>
  );
}
