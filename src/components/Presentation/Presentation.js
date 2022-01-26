import React from 'react';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '../../img/images/pm-main-picture.jpg';
import Button from '../common/Button/Button';
import './Presentation.css';

export default function Presentation({title, desc, button}){
    const { t } = useTranslation();
    return (
        <div className="presentation">
            <div
                className="presentation__in"
                style={{ backgroundImage: `url("${BackgroundImage}")` }}
            >
                <div className="presentation__content">
                    <div className="presentation__title">
                        {title}
                    </div>
                    <div className="presentation__description">
                        {desc}
                    </div>

                    <div className="presentation__button">
                        <Button text={button.key} />
                        <Button text={t('welcome.button.presentation')} customClass="button__transparent" />
                    </div>
                </div>
            </div>
        </div>
    )
}
