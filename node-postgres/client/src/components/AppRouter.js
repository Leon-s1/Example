import React from "react";
import { Routes, Route} from 'react-router-dom'
import Main from "../page/Main.js";
import LenKuz from "../page/LenKuz.js";
import NovoKuz from "../page/NovoKuz.js";
import Moscow from "../page/Moscow.js";
import { observer } from "mobx-react";


const publicRoutes = [
    {path: '/', Component: Main},
    {path: '/lenkuz', Component: LenKuz},
    {path: '/moscow', Component: Moscow},
    {path: '/novokuz', Component: NovoKuz},
]

const AppRouter = observer( () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component />} />
            )}
        </Routes>
    )
})

export default AppRouter