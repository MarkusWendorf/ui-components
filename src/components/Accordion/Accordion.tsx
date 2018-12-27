import React, {useState} from "react";

interface Props {
    children: any;
    /** Specify whether multiple sections can be active at the same time */
    multiple: boolean;
}

const Accordion = ({children, multiple}: Props) => {

    const [active, setActive] = useState({} as any);

    const childrn = React.Children.map(children, (child: any, i: number) => (
        React.cloneElement(child, {
            _active: active[i],
            _onClickActive: () => setActive({...(multiple ? active : {}), [i]: !active[i]}),
        })
    ));

    return (
        <div>
            {childrn}
        </div>
    );
};

Accordion.defaultProps = {
    multiple: false,
};

export default Accordion;
