import React from "react";
import { useTranslation } from 'react-i18next';

import './Menu.css';

export default function Menu(){
    const { t, i18n } = useTranslation();

    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="/">{t('header.menu.solutions')}</a>
                </li>
                <li className="menu__item">
                    <a href="/">{t('header.menu.tariffs')}</a>
                </li>
                <li className="menu__item">
                    <a href="/">{t('header.menu.company')}</a>
                </li>
            </ul>
        </nav>
    )
}
