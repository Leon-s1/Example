import React, {useContext, useState} from 'react';
import {loginmodal} from "../http/userAPI";
import {AppContext} from "./AppContex";
import {useNavigate} from "react-router-dom";


const LoginModal = ({active, setActive}) => {
    const {user} = useContext(AppContext)
    const navigate = useNavigate()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()

        const email = event.target.email.value.trim()
        console.log('email = ', email)

        const password = event.target.password.value.trim()
        console.log('password = ', password)

        const data = await loginmodal(email, password)
        console.log('data = ', data)
        if (data) {
            user.login(data)
            if (user.isAdmin) navigate('/admin')
            if (user.isAuth) navigate('/user')
        }
    }

    return (
        <div className={active ? 'loginmodal active' : 'loginmodal'} onClick={() => setActive(false)}>
            <div className={active ? 'loginmodal__content active' : 'loginmodal__content'} onClick={e => e.stopPropagation()}>

                {/*{children}*/}
                <div className='modal-form'>
                    <form action='' onSubmit={handleSubmit}>
                        <h3> Авторизация</h3>
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
                            {/*<button onClick={(e) => {setActive(false); handleSubmit(e)}}>Отменить</button>*/}
                            {/*<button onClick={(e) => setActive(false)}>Отменить</button>*/}
                            <button type="submit" value="Добавить" >Войти
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default LoginModal;