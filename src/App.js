import React from "react";
import Header from './components/Header/Header';
import Presentation from "./components/Presentation/Presentation";
import { useTranslation } from 'react-i18next';


import "./common/css/vars.css";
import "./App.css";

export default function App() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header />
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
}
