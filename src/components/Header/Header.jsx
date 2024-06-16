import React from 'react';
import Button from "../Button/Button";

const Header = () => {
    const tg = window.Telegram.WebApp;

    const onClouse = () => {
        tg.close()
    }

    return (
        <div className={'header'}>
            <button onClick={onClouse}>Закрыть</button>
            <span className={'username'}>
                {tg.initDataUnSafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;