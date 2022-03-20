import React from "react";
import s from './Input.module.css';

export default function Input({type, placeholder}){
    return (
        <div className={s.inputWrap}>
            <input
                className={s.input}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};
