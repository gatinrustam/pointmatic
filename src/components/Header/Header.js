import React from 'react';
import Menu from '../Menu/Menu';
import Button from '../common/Button/Button';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import ReactLogo from './img/logo.svg';
import SupportHeadphone from '../../img/icons/support-headphone.svg';

import './Header.css';

export default function Header(){
    return (
        <div className="header">
            <div className="header__in">
                <a href="/" className="header__logo">
                    <img src={ReactLogo} alt="React Logo" />
                </a>

                <Menu />

                <div className="header__relations">
                    <Button
                        text="Поддержка"
                        size="button__small"
                        icon={SupportHeadphone}
                    />
                    <LanguageSelector />
                    <Button text="Личный кабинет" />
                </div>
            </div>
        </div>
    )
};
