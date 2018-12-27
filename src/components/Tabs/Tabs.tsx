import React, {ReactElement, useState} from "react";
import Tab from "./Tab";
import "./tabs.scss";

interface Props {
    children: any;
}

const Tabs = ({children}: Props) => {

    const [active, setActive] = useState(0);

    const labels: Array<ReactElement<any>> = [];
    const chldren = React.Children.map(children, (child, i) => {

        const isActive = i === active;

        if (child.type === Tab) {
            labels.push(
                <div onClick={() => setActive(i)} className={"tabs__label " + (isActive ? "active" : "")} key={i}>
                    <span>{child.props.label}</span>
                </div>,
            );

            return React.cloneElement(child, {_active: isActive});
        }

        return child;
    });

    return (
        <div className="tabs">
            <div className="tabs__labels">
                {labels}
            </div>

            <div className="tabs__container">
                {chldren}
            </div>
        </div>
    );
};

export default Tabs;
