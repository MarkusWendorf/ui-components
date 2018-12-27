import React from "react";
import "./button.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: any;
    color?: string;
    disabled?: boolean;
    secondary?: boolean;
}

const Button = ({children, color, disabled, secondary, ...rest}: Props) => {

    const className = "button" + classNames("button--", {disabled, secondary});

    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
};

export default Button;

function classNames(base: string, booleans: any): string {
    return Object.keys(booleans).reduce(
        (prev, current) => booleans[current] ? prev + " " + base + current : prev, "");
}
