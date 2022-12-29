// const Login = () => {
//     return <h1>Авторизация</h1>
// }
//
// export default Login

import {AppContext} from "../components/AppContext";
import {useContext, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Container, Row, Card, Form, Button} from "react-bootstrap";

const Login = () => {
    const {user} = useContext(AppContext)
    const navigate = useNavigate()
    // если пользователь авторизован — ему здесь делать нечего
    useEffect(() => {
        if (user.isAdmin) navigate('/admin', {replace: true})
        if (user.isAuth) navigate('/user', {replace: true})
    }, [])

    return (
        <Container className='d-flex justify-content-center'>
            <Card style={{width: '50%'}} className='p-2 mt-5 bg-light'>
                <h3 className='m-auto'> Авторизация</h3>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш email...'
                        value=''
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш пароль...'
                        value=''
                    />
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        <Button type='submit'>Войти</Button>
                        <p>Нет аккаунта? <Link to='/signup'>Зарегистрируйтесь!</Link></p>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Login