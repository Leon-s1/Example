import React, {useContext, useState} from "react";
import logo from '../style/img/STS_logo.jpg'
import {NavLink} from "react-router-dom";
import {AppContext} from "./AppContex";
import LoginModal from "./LoginModal";

const Header = () => {
    const [loginmodalActive, setLoginmodalActive] = useState(false);
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

                <p>
                {user.isAuth ? (

                    <NavLink to='/login' className='nav-link'>Справочник...</NavLink>

                ) : (
                    <>
                    <NavLink to='/login' className='nav-link'>Авторизация</NavLink>
                    {/*<button onClick={() => setLoginmodalActive(true)}>Войти</button>*/}
                    {/*<NavLink to='/login' className={({isActive, isPending}) => isActive ? 'loginmodal active' : isPending ? 'loginmodal' : ""} >Войти</NavLink>*/}
                    </>
                )}
                </p>
                <p>

                {user.isAdmin && (
                    <NavLink to='/loginadmin' className='nav-link'>Панель управления</NavLink>
                )}
                </p>

                <LoginModal active={loginmodalActive} setActive={setLoginmodalActive} />
                {/*<p>Сайт Сибтранссервис</p>*/}
                {/*<p>Сайт Феррит</p>*/}
                {/*<div className="header__login">Войти</div>*/}
                {/*<div className="header__registration">Регистрация</div>*/}
            </div>
        </div>
</>
        )
}

export default Header