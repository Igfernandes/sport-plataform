import { Input } from '../Input';
import { Label } from '../Label';
import { FormGroupProps } from './type';

export function FormGroup(props: FormGroupProps) {
  const {
    label,
    classGroup = {formGroup: '', input: '', label: ''},
    labelContent,
    stylelabel,
    htmlfor,
    className,
    ...restInput
  } = props;

  return (
    <div className={`form-group ${classGroup?.formGroup}`}>
      <Label style={stylelabel} className={`${classGroup?.label}`} htmlFor={htmlfor}>
        {label} {labelContent}
      </Label>
      <Input className={`${classGroup?.input} ${className} form-control`} {...restInput} />
    </div>
  );
}
