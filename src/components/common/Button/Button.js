import React from "react";

import './Button.css';

export default function Button({text, size, icon, customClass}) {
    return (
        <div className="button-wrap">
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
        </div>
    )
}
