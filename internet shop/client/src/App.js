// Во-первых, данные о пользователе следует получать в компоненте App.
// Потому что эти данные требуются компоненту NavBar, чтобы показать нужные ссылки
// — авторизации или личного кабинета. Чтобы получить эти данные —
// пришлось создавать HOC-компонент CheckAuth, который показывает loader,
// пока выполняется запрос на сервер. Если данные будут получены в App и
// сохранены в хранилище — HOC-компонент CheckAuth будет не нужен.
import React from "react";
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter.js'
import NavBar from './components/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import { AppContext } from './components/AppContext.js'
import { check as checkAuth } from './http/userAPI.js'
import { useState, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Loader from './components/Loader.js'
import { fetchBasket } from "./http/basketAPI.js";

import axios from 'axios'

const App = observer(() => {
    const { user, basket } = useContext(AppContext)
    const [loading, setLoading] = useState(true)
    // const [userAuthLoading, setUserAuthLoading] = useState(true)
    // const [basketLoading, setBasketLoading] = useState(true)


    // useEffect(() => {
    //     checkAuth()
    //         .then(data => {
    //             if (data) {
    //                 user.login(data)
    //             }
    //         })
    //         .finally(
    //             // () => setLoading(false)
    //             setUserAuthLoading(false)
    //         )
    //     fetchBasket()
    //         .then(
    //             data => basket.products = data.products
    //         )
    //         .finally(
    //             () => setBasketLoading(false)
    //         )
    // }, [])

    useEffect(() => {
        Promise.all([checkAuth(), fetchBasket()])
            .then(
                axios.spread((userData, basketData) => {
                    if (userData) {
                        user.login(userData)
                    }
                    basket.products = basketData.products
                })
            )
            .finally(
                () => setLoading(false)
            )
    }, [])

    // показываем loader, пока получаем с сервера данные пользователя
    // if (loading) {
    // if (userAuthLoading || basketLoading) {
    if (loading) {
        return <Loader />
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
})

export default App

// import 'bootstrap/dist/css/bootstrap.min.css'
//
// function App() {
//   return (
//     <div>
//       SHOP
//     </div>
//   );
// }
//
// export default App;

// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Shop from './pages/Shop.js'
// import Product from './pages/Product.js'
// import Basket from './pages/Basket.js'
// import Login from './pages/Login.js'
// import Signup from './pages/Signup.js'
// import Delivery from './pages/Delivery.js'
// import Contacts from './pages/Contacts.js'
// import NotFound from './pages/NotFound.js'
// import AppRouter from "./components/AppRouter";

// const App = () => {
//     return (
//         <BrowserRouter>
            {/*<Routes>*/}
            {/*    <Route path='/' element={<Shop/>}/>*/}
            {/*    <Route path='/product/:id' element={<Product />} />*/}
            {/*    <Route path='/basket' element={<Basket />} />*/}
            {/*    <Route path='/login' element={<Login />} />*/}
            {/*    <Route path="/signup" element={<Signup />} />*/}
            {/*    <Route path="/delivery" element={<Delivery />} />*/}
            {/*    <Route path="/contacts" element={<Contacts />} />*/}
            {/*    /!*<Route path="*" element={<NotFound />} />*!/*/}
            {/*</Routes>*/}
{/*            <AppRouter/>*/}
{/*        </BrowserRouter>*/}
{/*    )*/}
{/*}*/}

{/*export default App*/}



