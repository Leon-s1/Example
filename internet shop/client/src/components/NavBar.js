import {Container, Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {AppContext} from "./AppContext.js";
import {useContext} from "react";

const NavBar = () => {
    // const isAuth = true
    // const isAdmin = true
    const {user} = useContext(AppContext)
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                {/*<Navbar.Brand href='/'>Магазин</Navbar.Brand>*/}
                <NavLink to='/' className='navbar-brand'>Магазин</NavLink>

                {/*<Nav className='mr-auto'>*/}
                <Nav className='ml-auto'>

                    {/*<Nav.Link href="/delivery">Доставка</Nav.Link>*/}
                    <Nav.Link to="/delivery" className='nav-link'>Доставка</Nav.Link>
                    {/*<Nav.Link href="/contacts">Контакты</Nav.Link>*/}
                    <Nav.Link to="/contacts" className='nav-link'>Контакты</Nav.Link>

                    {user.isAuth ? (
                        <Nav.Link to='/user' className='nav-link'>Личный кабинет</Nav.Link>
                    ) : (
                        <>
                            <Nav.Link to='/login' className='nav-link'>Войти</Nav.Link>
                            <Nav.Link to='/signup' className='nav-link'>Регистрация</Nav.Link>
                        </>
                    )}
                    {user.isAdmin && (
                        <Nav.Link to='/admin' className='nav-link'>Панель управления</Nav.Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    )

}

export default NavBar