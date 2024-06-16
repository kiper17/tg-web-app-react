const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClouse = () => {
        tg.close()
    }

    const onToogleButton = () => {
        if(tg.MainButton.isvisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }

    return {
        onClouse,
        onToogleButton,
        tg,
        user: tg.initDataUnSafe?.user,

    }
}