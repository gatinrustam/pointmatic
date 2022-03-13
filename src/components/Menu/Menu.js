import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import './Menu.css';

export default function Menu(){
    const { t, i18n } = useTranslation();

    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <Link to="/solutions">
                        {t('header.menu.solutions')}
                    </Link>
                </li>
                <li className="menu__item">
                    <Link to="/tariffs">
                        {t('header.menu.tariffs')}
                    </Link>
                </li>
                <li className="menu__item">
                    <Link to="/company">
                        {t('header.menu.company')}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
