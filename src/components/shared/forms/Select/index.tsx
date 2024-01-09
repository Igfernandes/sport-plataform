import { SelectProps } from './type';

export function Select(props: SelectProps) {
  const { classFormGroup, classSelect, name, id, onChange, options, placeholder, ...restSelect } =
    props;

  return (
    <div className={`w-full ${classFormGroup}`}>
      <select
        {...restSelect}
        className={classSelect}
        name={name}
        id={id}
        onChange={onChange}
        required
        placeholder={placeholder}
      >
        {options}
      </select>
    </div>
  );
}
