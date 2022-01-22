import React from "react";

import './Menu.css';

export default function Menu(){
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="/">Решения</a>
                </li>
                <li className="menu__item">
                    <a href="/">Тарифы</a>
                </li>
                <li className="menu__item">
                    <a href="/">Компания</a>
                </li>
            </ul>
        </nav>
    )
}
