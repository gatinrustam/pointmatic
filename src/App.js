import React from "react";
import Header from './components/Header/Header';
import Presentation from "./components/Presentation/Presentation";
// import { useTranslation } from 'react-i18next';

import "./common/css/vars.css";
import "./App.css";

export default function App() {
    // const { t, i18n } = useTranslation();

    return (
        <>
            <Header />
            <Presentation
                title={'title'}
                desc="В вашем личном кабинете будет собранная база данных, отсортированная и отфильтрованная так, как вам это необходимо. Никаких автоматических решений."
                button={{
                    key: "Демо",
                    url: "/lk",
                }}
            />
        </>
    )
}
