import React from "react";
import logo from '../style/img/STS_logo.jpg'

const Header = () => {

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
            <div className="header__login">Войти</div>
            <div className="header__registration">Регистрация</div>
        </div>
</>
        )
}

export default Header