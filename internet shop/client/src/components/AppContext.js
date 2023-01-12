import React from "react";

const AppContext = React.createContext()

//Контекст, который будем передавать
const context = {
    user: {
        email: 'ivanov@mail.ru',
        isAuth: true,
        isAdmin: false,
    },
    products: [
        {id: 1, name: 'Холодильник раз', price: 12345, rating: 0, image: '', categoryId: 1, brandId: 1},
        {id: 2, name: 'Холодильник два', price: 23456, rating: 0, image: '', categoryId: 1, brandId: 2},
        {id: 3, name: 'Телевизор раз', price: 34567, rating: 0, image: '', categoryId: 2, brandId: 1},
        {id: 4, name: 'Телевизор два', price: 45678, rating: 0, image: '', categoryId: 2, brandId: 2},
        {id: 5, name: 'Смартфон раз', price: 56789, rating: 0, image: '', categoryId: 3, brandId: 3},
        {id: 6, name: 'Смартфон два', price: 67890, rating: 0, image: '', categoryId: 3, brandId: 4},
        {id: 7, name: 'Планшет раз', price: 78901, rating: 0, image: '', categoryId: 4, brandId: 3},
        {id: 8, name: 'Планшет два', price: 89012, rating: 0, image: '', categoryId: 4, brandId: 4},
    ],
    categories: [
        {id: 1, name: 'Холодильники'},
        {id: 2, name: 'Телевизоры'},
        {id: 3, name: 'Смартфоны'},
        {id: 4, name: 'Планшеты'},
    ],
    brands: [
        {id: 1, name: 'Samsung'},
        {id: 2, name: 'Philips'},
        {id: 3, name: 'Siemens'},
        {id: 4, name: 'Xiaomi'},
    ],
    basket: [
        {product_id: 1, name: 'Смартфон раз', price: 56789, quantity: 2},
        {product_id: 8, name: 'Планшет два', price: 89012, quantity: 1},
    ],
}

const AppContextProvider = (props) => {
    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}