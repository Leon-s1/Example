import React from "react";
import logo from '../style/img/STS_logo.jpg'
import {NavLink} from "react-router-dom";
import '../style/style.css'

const Header = () => {
    const user = localStorage.getItem('user.isAdmin')

    function logout() {
        localStorage.removeItem('user.isAdmin')
        window.location.reload();
        window.location.assign('http://localhost:3002')
    }

    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <h1>Телефонный справочник</h1>
            <div className='company'>
                <div className='company__link'>
                    <a href="http://www.sibtranss.ru" className="nav-link" target="_blank" rel="noopener noreferrer">
                        Сайт Сибтранссервис
                    </a>
                    <a href="https://www.ferrit.cz/ru" className="nav-link" target="_blank" rel="noopener noreferrer">
                        Сайт Ferrit
                    </a>
                </div>
                <div className="company__auth">
                    <div>
                        {user ? (
                            <NavLink to='#' className='nav-link' onClick={() => {
                                logout()
                            }}>Выйти</NavLink>
                        ) : (
                            <NavLink to='/login' className='nav-link'>Авторизация</NavLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header