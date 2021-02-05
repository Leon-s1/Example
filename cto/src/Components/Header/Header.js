import React, { Component } from 'react'
import {
  Container,
  Navbar,
  NavbarBrand,
  NavLink,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import logo from './img/audi.png'
import Home from '../../Pages/Home'
import Services from '../../Pages/Services'
import Prices from '../../Pages/Prices'
import Works from '../../Pages/Works'
import Contacts from '../../Pages/Contacts'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <a href="/">
              <h3 style={{ color: 'white', marginRight: '1rem' }}>
                {' '}
                АВТОСЕРВИС
              </h3>
            </a>
            <NavbarBrand href="/">
              <img
                src={logo}
                height="110"
                width="130"
                className="d-inline-block aligne-top"
                alt="Logo"
              />
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink href="/">Домой</NavLink>
                <NavLink href="/services">Услуги</NavLink>
                <NavLink href="/prices">Цены</NavLink>
                <NavLink href="/works">Наши работы</NavLink>
                <NavLink href="/contacts">Контакты</NavLink>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/prices" component={Prices} />
            <Route exact path="/works" component={Works} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </Router>
      </>
    )
  }
}
