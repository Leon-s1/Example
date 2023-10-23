import React from 'react';


const AppContext = React.createContext()

const context = {
    user: {
        email: 'admin@mail.ru',
        isAuth: true,
        isAdmin: true,
    }
}

const AppContextProvider = (props) => {
    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider }