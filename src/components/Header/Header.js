import React from 'react';
import Menu from '../Menu/Menu';
import Button from '../common/Button/Button';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

import ReactLogo from './img/logo.svg';
import SupportHeadphone from '../../img/icons/support-headphone.svg';

import './Header.css';

export default function Header(){
    const { t } = useTranslation();
    return (
        <div className="header">
            <div className="header__in">
                <a href="/" className="header__logo">
                    <img src={ReactLogo} alt="React Logo" />
                </a>

                <Menu />

                <div className="header__relations">
                    <Button
                        text={t('header.menu.support')}
                        size="button__small"
                        icon={SupportHeadphone}
                    />
                    <LanguageSelector />
                    <Button text={t('header.menu.cabinet')} />
                </div>
            </div>
        </div>
    )
};
