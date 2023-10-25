import React from 'react';
import UserStore from "../store/UserStore";


const AppContext = React.createContext()

const context = {
    user: new UserStore()
}
//     user: {
//         email: 'admin@mail.ru',
//         password: '123456',
//         isAuth: false,
//         isAdmin: false,
//     }
// }

const AppContextProvider = (props) => {
    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider }