import {AppContext} from "../components/AppContex.js";
import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink, useNavigate, useLocation, redirect} from "react-router-dom";
// import {Container, Row, Card, Form, Button} from "react-bootstrap";
import {loginmodal} from "../http/userAPI.js";
import {observer} from "mobx-react-lite";
import "../components/modal.css"
import "../../src/style/style.css"
import '../components/modal.css'

import LoginModal from "../components/LoginModal";
import AddUser from "../components/AddUser";
import ItemList from "../components/ItemList";

const Login = observer(({active, setActive}) => {
    // const [loginmodalActive, setLoginmodalActive] = useState(false);
    const [value,setValue] = useState();
    const [delmodalActive, setDelmodalActive] = useState(false);
    const {user} = useContext(AppContext)
    const [isAdmin, setAdmin] = useState(user.isAdmin)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // console.log('loginmodalActive = ', loginmodalActive)


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    // если пользователь авторизован — ему здесь делать нечего
    useEffect(() => {
        // if (user.isAdmin) {return redirect('/lenkuz')}
        // if (isAuth) navigate('/lenkuz', {replace: true})
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('user.auth из контекста = ', user.isAuth)
        console.log('user.email из контекста = ', user.email)
        console.log('user.password из контекста = ', user.pass)
        const email = event.target.email.value.trim()
        console.log('email = ', email)
        const password = event.target.password.value.trim()
        console.log('password = ', password)

            {
                (email === user.email && password === user.pass) ?
                    (

                        localStorage.setItem('user.isAdmin', true)
                            // {navigate('/lenkuz', {replace: true})}

                        // user.isAdmin = true



                    )
                        :
                console.log("email не равно context.email pass не равен context.pass", email, user.email, password, user.pass)
            }


        }

                // console.log("email = context.email pass = context.pass ", email, user.email, password, user.pass)  :

                // (user.isAdmin) ?
                // navigate('/lenkuzadmin', {replace: true}) :
                //     navigate('/lenkuz', {replace: true})


                    // alert('Не правильный логин или пароль!')
        // <div className={active ? 'delmodal active' : 'delmodal'} onClick={() => setActive(false)}>
        //     <div className={active ? 'delmodal__content active' : 'delmodal__content'} onClick={e => e.stopPropagation()}>
        //
        //         <div className='modal-form'>
        //             <form action='' >
        //                 <h3>Удалить контакт</h3>
        //
        //                 <div>
        //                     <label>ID:
        //                     </label>
        //                     <input
        //                         type="text"
        //                         name="id"
        //                         // value={id}
        //                         // onChange={(e) => setId(e.target.value)}
        //                         pattern=".{1,}" required
        //                         placeholder="Введите id сотрудника"
        //                     />
        //                 </div>
        //
        //                 <div className='btn-block'>
        //                     {/*<button onClick={(e) => {setActive(false); handleSubmit(e)}}>Отменить</button>*/}
        //                     <button type="submit" value="Удалить">Удалить
        //                     </button>
        //                 </div>
        //             </form>
        //         </div>
        //
        //
        //     </div>
        // </div>



        // if (data) {
        //     user.login(data)
        //     if (user.isAdmin) navigate('/admin')
        //     if (user.isAuth) navigate('/user')
        // }
    const refresh = ()=> {
        // это вызовет ререндеринг компонента
        window.location.reload();
        window.location.assign('http://localhost:3000')
        // redirect('/lenkuz')
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
                            {/*<button onClick={(e) => {setActive(false); handleSubmit(e)}}>Отменить</button>*/}
                            {/*<button onClick={(e) => setActive(false)}>Отменить</button>*/}
                            <button type="submit" value="Добавить" onClick={() => {refresh()}}>
                            {/*navigate(from, { replace: true })*/}

                            Войти
                            </button>
                        </div>
                    </form>
                </div>
                {/*<LoginModal active={loginmodalActive} setActive={setLoginmodalActive} />*/}

            {/*    {user.isAuth ? (*/}
            {/*    <LoginModal active={loginmodalActive} setActive={setloginmodalActive} />*/}
            {/*<ItemList/>*/}

            {/*    ) : (*/}
            {/*        // <>*/}
            {/*    <LoginModal active={loginmodalActive} setActive={setLogimodalActive} />*/}

            {/*        // </>*/}
            {/*    )}*/}

</>


    )
})

export default Login