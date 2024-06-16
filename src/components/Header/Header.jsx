import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'

const Header = () => {

    const {user, onClouse} = useTelegram()

    return (
        <div className={'header'}>
            <button onClick={onClouse}>Закрыть</button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;