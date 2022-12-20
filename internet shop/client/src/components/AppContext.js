import React from "react";

const AppContext = React.createContext()

//Контекст, который будем передавать
const context = {
    user: {
        email: 'ivanov@mail.ru',
        isAuth: true,
        isAdmin: false,
    }
}

const AppContextProvider = (props) => {
    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}