import React from "react"
import { Outlet } from "react-router-dom"
import Container from "../container"
import Header from "../header"

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        {/*<div className="flex-2 p-4">*/}
        {/*  <NavBar />*/}
        {/*</div>*/}
        <div className="slex-1 p-4">
          <Outlet />
        </div>
      </Container>
    </>
  )
}

export default Layout
