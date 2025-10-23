import React, {useContext, useState} from "react";
import {AppContext} from "../components/AppContex.js";
import {observer} from "mobx-react-lite";
import "../components/modal.css"
import "../../src/style/style.css"
import '../components/modal.css'

const Login = observer(() => {
    const {user} = useContext(AppContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        const email = event.target.email.value.trim()
        const password = event.target.password.value.trim()
        {
            (email === user.email && password === user.pass) ?
                (
                    localStorage.setItem('user.isAdmin', true)
                )
                :
                alert('Неправильный логин или пароль!')
        }
    }

    const refresh = () => {
        // это вызовет ререндеринг компонента
        window.location.reload();
        window.location.assign('http://localhost:3002')
    }

    return (
        <>
            <h1>Страница авторизации</h1>
            <div className='container'>
                <form className='auth__form' action='' onSubmit={handleSubmit}>
                    <h2> Авторизация</h2>
                    <div>
                        <label>Email:
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            pattern=".{1,}" required
                            placeholder='Введите ваш email...'
                        />
                        <label>Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            pattern=".{1,}" required
                            placeholder='Введите ваш пароль...'
                        />
                    </div>
                    <div className='btn-block'>
                        <button type="submit" value="Добавить" onClick={() => {
                            refresh()
                        }}>
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
})

export default Login