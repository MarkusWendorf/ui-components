import React from "react";
import "./icon.scss";

const ChevronUp = (props: any) => (
    <svg
        className="icon"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        {...props}
    >
        <path d="M30 20 L16 8 2 20" />
    </svg>
);

export default ChevronUp;
