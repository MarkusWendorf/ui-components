import React, {useState} from "react";
import Checkmark from "../Icons/Checkmark";
import "./checkbox.scss";

interface Props {
    children: React.ReactNode;
    onChange: (checked: boolean) => void;
}

const Checkbox = ({children, onChange}: Props) => {

    const [active, setActive] = useState(false);

    return (
        <label className={"checkbox " + (active ? "active" : "")}>
            <div className="checkbox__box">
                <input
                    type="checkbox"
                    onChange={() => {
                        onChange(!active);
                        setActive(!active);
                    }}
                />
                <Checkmark/>
            </div>
            {children}
        </label>
    );
};

export default Checkbox;
