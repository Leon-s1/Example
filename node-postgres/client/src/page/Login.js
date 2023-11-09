import {AppContext} from "../components/AppContex.js";
import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
// import {Container, Row, Card, Form, Button} from "react-bootstrap";
import {login} from "../http/userAPI.js";
import {observer} from "mobx-react-lite";
import "../components/modal.css"
import LoginModal from "../components/LoginModal";
import AddUser from "../components/AddUser";
import ItemList from "../components/ItemList";

const Login = observer(() => {
    const [loginmodalActive, setLoginmodalActive] = useState(false);
    const {user} = useContext(AppContext)
    const navigate = useNavigate()
    console.log('loginmodalActive = ', loginmodalActive)
    // если пользователь авторизован — ему здесь делать нечего
    useEffect(() => {
        if (user.isAdmin) navigate('/admin', {replace: true})
        if (user.isAuth) navigate('/lenkuz', {replace: true})
    }, [])

    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     const email = event.target.email.value.trim()
    //     const password = event.target.password.value.trim()
    //     const data = await login(email, password)
    //     if (data) {
    //         user.login(data)
    //         if (user.isAdmin) navigate('/admin')
    //         if (user.isAuth) navigate('/user')
    //     }
    // }

    return (

            <>
            <h1>Страница входа</h1>

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