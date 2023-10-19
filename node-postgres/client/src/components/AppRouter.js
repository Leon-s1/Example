import React, {useState} from "react";
import { Routes, Route} from 'react-router-dom'
import Main from "../page/Main.js";
import LenKuz from "../page/LenKuz.js";
import NovoKuz from "../page/NovoKuz.js";
import Moscow from "../page/Moscow.js";
import Vorkuta from "../page/Vorkuta";
import Norilsk from "../page/Norilsk";
import Shahti from "../page/Shahti";
import Ural from "../page/Ural";
import Rekvizit from "../page/Rekvizit";
import { observer } from "mobx-react";


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
    ]

    const AppRouter = observer( (path) => {

    const [activePath, setActivePath] = useState(publicRoutes[0])
    console.log('activePath', activePath)

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
            // <Route key={path} path={path} element={<Component />} />
            <Route key={path} path={path} element={<Component />} />
            )}
        </Routes>
    )
})

export default AppRouter