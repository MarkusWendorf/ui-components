import React, {useState} from "react";
import "../inputs.scss";

interface Props {
    label: string;
    onChange: (value: string) => void;
    regex: RegExp;
}

const RegexInput = ({label, regex, onChange}: Props) => {

    const [value, setValue] = useState("");
    const change = (e: any) => {
        const val = e.target.value;
        if (regex.test(val)) {
            setValue(val);
            onChange(val);
        }
    };

    return (
        <label className="input input-number" htmlFor={"input-" + label}>
            <span className="input-label">{label}</span>
            <input id={"input-" + label} type="text" onChange={change} value={value}/>
        </label>
    );
};

export default RegexInput;
