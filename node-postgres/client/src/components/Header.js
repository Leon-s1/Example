import React from "react";
import logo from '../style/img/STS_logo.jpg'
import {NavLink} from "react-router-dom";
import '../style/style.css'
// import {AppContext} from "./AppContex";
// import LoginModal from "../arkhiv/LoginModal";

const Header = () => {
    // const [loginmodalActive, setLoginmodalActive] = useState(false);
    // const { user } = useContext(AppContext)
    const user = localStorage.getItem('user.isAdmin')

    function logout() {
        localStorage.removeItem('user.isAdmin')
        window.location.reload();
        window.location.assign('http://localhost:3000')

    }

    return(
        // <div className='wrap'>
            <div className='header'>
                <div className='logo'>
                    <img src={logo}/>
                </div>
                <h1>Телефонный справочник Сибтранссервис</h1>
                <div className='company'>
                    <div className='company__link'>
                        {/*<p>Сайт Сибтранссервис</p>*/}
                        {/*<p>Сайт Феррит</p>*/}
                        <a href="https://www.sibtranss.ru/" className="nav-link" target="_blank" rel="noopener noreferrer">
                            Сайт Сибтранссервис
                        </a>
                        <a href="https://www.ferrit.cz/ru/" className="nav-link" target="_blank" rel="noopener noreferrer">
                            Сайт Ferrit
                        </a>
                    </div>
                    <div className="company__auth">
                        <div>
                            {user ? (
                                <NavLink to='#' className='nav-link' onClick={() => {logout()}}>Выйти</NavLink>
                            ) : (
                                <NavLink to='/login' className='nav-link'>Авторизация</NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        // </div>
        )
}

export default Header