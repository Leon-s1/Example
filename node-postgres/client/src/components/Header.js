import React, {useContext} from "react";
import logo from '../style/img/STS_logo.jpg'
import {NavLink} from "react-router-dom";
import {AppContext} from "./AppContex";

const Header = () => {
    const { user } = useContext(AppContext)
    return(
        <>
        <div className='header'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <h1 className='text-center'>Телефонный справочник</h1>
            <div className='company'>
                <p>Сайт Сибтранссервис</p>
                <p>Сайт Феррит</p>
            </div>
            <div className="company">
                <p>{user.isAuth && (
                    <NavLink to='/login' className='nav-link'>Войти</NavLink>
                )}
                </p>
                <p>

                {user.isAdmin && (
                    <NavLink to='/admin' className='nav-link'>Панель управления</NavLink>
                )}
                </p>
                {/*<p>Сайт Сибтранссервис</p>*/}
                <p>Сайт Феррит</p>
                {/*<div className="header__login">Войти</div>*/}
                {/*<div className="header__registration">Регистрация</div>*/}
            </div>
        </div>
</>
        )
}

export default Header