import {AppContext} from "../components/AppContex.js";
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// import {Container, Row, Card, Form, Button} from "react-bootstrap";
import {login} from "../http/userAPI.js";
import {observer} from "mobx-react-lite";
import "../components/modal.css"
import LoginModal from "../components/LoginModal";
import AddUser from "../components/AddUser";

const Login = observer(() => {
    const [loginmodalActive, setLogimodalActive] = useState(true);
    const {user} = useContext(AppContext)
    const navigate = useNavigate()

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
            <LoginModal active={loginmodalActive} setActive={setLogimodalActive} />
            </>

    )
})

export default Login