import React, { Component } from 'react'
import { Container, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import Nav from 'react-bootstrap/esm/Nav'
import logo from './logo192.png'

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <Container>
          <NavbarBrand href="/">
            <img
              src={logo}
              height="30"
              width="30"
              className="d-inline-block aligne-top"
              alt="Logo"
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink href="/">Домой</NavLink>
              <NavLink href="services">Услуги</NavLink>
              <NavLink href="price">Цены</NavLink>
              <NavLink href="works">Наши работы</NavLink>
              <NavLink href="contacts">Контакты</NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    )
  }
}
