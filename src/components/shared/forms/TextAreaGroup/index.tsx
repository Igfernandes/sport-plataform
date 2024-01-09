import { TextAreaGroupProps } from "./hooks/type";

export function TextAreaGroup(props: TextAreaGroupProps) {
    const { className, label, name, id, onChange, textarea,  placeholder, maxLength } = props;

    return (
        <div className={`${className.formGroup}`}>
            <label className={`${className.label}`} >{label}</label>
            <textarea
                className={`${className.textArea}`}
                placeholder={placeholder}
                name={name}
                id={id}
                onChange={onChange}
                maxLength={maxLength}
                required>
                {textarea}
            </textarea>
        </div>
    );
}
