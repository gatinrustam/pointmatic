import React from "react";
import Header from "../Header/Header";
import Presentation from "../Presentation/Presentation";

import { useTranslation } from 'react-i18next';
import Input from "../common/Input/Input";

export default function Main() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header />

            <Input type="password" />

            <Presentation
                title={t('welcome.title')}
                desc={t('welcome.desc')}
                button={{
                    key: t('welcome.button.demo'),
                    url: "/lk",
                }}
            />
        </>
    )
};
