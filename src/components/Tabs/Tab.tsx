import React from "react";

interface Props {
    _active: boolean;
    children: any;
    label: string;
}

const Tab = ({_active, children}: Props) => (
    <div className={"tabs__element " + (_active ? "show" : "")}>
        {children}
    </div>
);

Tab.defaultProps = {
    _active: -1,
};

export default Tab;
