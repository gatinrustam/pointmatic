import React, { useState } from "react";
import Input from "../common/Input/Input";
import Header from '../Header/Header';

import s from './Auth.module.css';

export default function Auth(){
    const [authStatus, setAuthStatus] = useState('login');



    if (authStatus === 'login') {
        return (
            <from className={s.authForm}>
                <h1 className={s.title}>Log in</h1>
                <Input
                    type="text"
                    placeholder="email"
                />
                <Input
                    type="password"
                    placeholder="password"
                />

                <Input
                    type="submit"
                />
            </from>
        )
    }
    return (
        <>
            <Header />
            <div className={s.auth}>
                <div className={s.authIn}>
                    {login}
                </div>
            </div>
        </>
    );
};
