import React from "react";
import { Routes, Route} from 'react-router-dom'
import Main from "../page/Main.js";
import LenKuz from "../page/LenKuz.js";
import { observer } from "mobx-react";


const publicRoutes = [
    {path: '/', Component: Main},
    {path: '/lenkuz', Component: LenKuz},
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