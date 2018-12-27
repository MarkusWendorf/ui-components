import React from "react";
import ChevronUp from "../Icons/ChevronUp";
import ChevronDown from "../Icons/ChevronDown";
import "./accordion.scss";

interface Props {
    children: any;
    name: string;
    _active: boolean;
    _onClickActive: () => void;
}

const AccordionSection = ({children, _active, name, _onClickActive}: Props) => (

    <div className={"accordion__section " + (_active ? "active" : "")}>
        <div className="accordion__section-head" onClick={_onClickActive}>
            <span>{name}</span>
            {_active ? <ChevronUp/> : <ChevronDown/>}
        </div>

        <div className="accordion__content">
            {children}
        </div>
    </div>

);

AccordionSection.defaultProps = {
    active: false,
    onClickActive: () => { /* */ },
};

export default AccordionSection;
