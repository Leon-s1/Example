import React, {useContext, useState} from "react";
import { Routes, Route} from 'react-router-dom'
import Login from "../page/Login.js";
import LenKuz from "../page/LenKuz.js";
import NovoKuz from "../page/NovoKuz.js";
import Moscow from "../page/Moscow.js";
import Vorkuta from "../page/Vorkuta";
import Norilsk from "../page/Norilsk";
import Shahti from "../page/Shahti";
import Ural from "../page/Ural";
import Rekvizit from "../page/Rekvizit";
import Admin from "../page/Admin";
import { observer } from "mobx-react";
import {AppContext} from "./AppContex.js";


    const publicRoutes = [
        {path: '/', Component: LenKuz},
        {path: '/lenkuz', Component: LenKuz},
        {path: '/novokuz', Component: NovoKuz},
        {path: '/moscow', Component: Moscow},
        {path: '/vorkuta', Component: Vorkuta},
        {path: '/norilsk', Component: Norilsk},
        {path: '/shahti', Component: Shahti},
        {path: '/ural', Component: Ural},
        {path: '/rekvizit', Component: Rekvizit},
        {path: '/login', Component: Login},
    ]

const authRoutes = [
    {path: '/lenkuz', Component: LenKuz},
    ]

    const adminRoutes = [
        {path: '/admin', Component: Admin},
    ]

    const AppRouter = observer( () => {
    const { user } = useContext(AppContext)

    // const [activePath, setActivePath] = useState(publicRoutes[0])
    // console.log('activePath', activePath)

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