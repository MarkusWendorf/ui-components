import React from "react";
import "./tag.scss";

interface Props {
    children: any;
    linkTo: string;
}

const Tag = ({children, linkTo}: Props) => (
    <a className="tag" href={linkTo || "javascript:void(0);"}>{children}</a>
);

export default Tag;
