import React from "react";
import { Link } from "react-router-dom";

import './Button.css';

export default function Button({text, size, icon, customClass, to}) {
const button = (
    <button
        className={`
            button
            ${size ? size : 'button__default'}
            ${customClass ? customClass : ''}
        `}
    >
        {text}
        <img src={icon} className="button__image" alt="" />
    </button>
);

    return (
        <div className="button-wrap">
            {to ? (
                <Link
                    to={to}
                >
                    {button}
                </Link>
            ) : button}
        </div>
    )
}
