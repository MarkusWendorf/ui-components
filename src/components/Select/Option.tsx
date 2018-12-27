import React from "react";

interface Props {
    children: string;
}

const Option = ({children}: Props) => (
    <option>
        {children}
    </option>
);

export default Option;
