import React from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";

const NavBar = observer( () => {
    return (
        <>
        <NavLink to='/'>Домой</NavLink>
        <NavLink to='lenkuz'>Кнопка Ленинск-Кузнецкий</NavLink>
        <NavLink to='novokuz'>Кнопка Новокузнецк</NavLink>
        <NavLink to='moscow'>Кнопка Москва</NavLink>
        </>
    )
})

export default NavBar