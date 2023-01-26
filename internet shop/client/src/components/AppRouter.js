import { Routes, Route } from 'react-router-dom'
import Shop from '../pages/Shop.js'
import Login from "../pages/Login.js";
import Signup from "../pages/Signup.js";
import Basket from "../pages/Basket.js";
import Product from "../pages/Product.js";
import Delivery from "../pages/Delivery.js";
import Contacts from "../pages/Contacts.js";
import NotFound from '../pages/NotFound.js'
import User from '../pages/User.js'
import Admin from "../pages/Admin.js";
// import { Component } from "react";
import { AppContext } from './AppContext.js'
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

const publicRoutes = [
    {path: '/', Component: Shop},
    {path: '/login', Component: Login},
    {path: '/signup', Component: Signup},
    {path: '/product/:id', Component: Product},
    {path: 'basket', Component: Basket},
    {path: '/delivery', Component: Delivery},
    {path: '/contacts', Component: Contacts},
    {path: '*', Component: NotFound},
]

const authRoutes = [
    {path: '/user', Component: User},
]

const adminRoutes = [
    {path: '/admin', Component: Admin}
]

const AppRouter = observer(() => {
    // const isAuth = true
    // const isAdmin = true
    const { user } = useContext(AppContext)
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                 <Route key={path} path={path} element={<Component />} />
            )}
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            {user.isAdmin && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            )}
        </Routes>
    )
})

export default AppRouter