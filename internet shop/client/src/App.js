// Во-первых, данные о пользователе следует получать в компоненте App.
// Потому что эти данные требуются компоненту NavBar, чтобы показать нужные ссылки
// — авторизации или личного кабинета. Чтобы получить эти данные —
// пришлось создавать HOC-компонент CheckAuth, который показывает loader,
// пока выполняется запрос на сервер. Если данные будут получены в App и
// сохранены в хранилище — HOC-компонент CheckAuth будет не нужен.
// import React from "react";
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
    }, [basket, user])

    // показываем loader, пока получаем с сервера данные пользователя и корзину
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

