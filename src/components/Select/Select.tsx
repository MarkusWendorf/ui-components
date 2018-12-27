import React from "react";
import "./select.scss";
import ChevronDown from "../Icons/ChevronDown";

interface Props {
    children: React.ReactNode;
    onChange: (newVal: string) => void;
    defaultValue?: string;
}

const Select = ({children, defaultValue, onChange}: Props) => {

    return (
        <div className="select">
            <select defaultValue={defaultValue} onChange={(e: any) => onChange(e.target.value)}>
                {children}
            </select>
            <ChevronDown/>
        </div>
    );
};

export default Select;
