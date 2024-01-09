import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
    type?: "button" | "submit" | "reset",
    name?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button(props: ButtonProps) {
    const { className, style, onClick, children, type,name } = props;

    return (
        <button style={style} className={className} onClick={onClick} type={type} name={name} >
            {children}
        </button>
    );
}