import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react"
import React, { useContext } from "react"
import { FaRegMoon } from "react-icons/fa"
import { LuSunMedium } from "react-icons/lu"
import StsLogo from "../logo/index"
import NavBar from "../nav-bar"
import { ThemeContext } from "../theme-provider"
import "../../index.css"

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    // <Navbar maxWidth={"full"} height="100px" className="header">
    <Navbar maxWidth={"full"} height="100px" isBordered className="shadow-2xl">
      <NavbarBrand>
        <StsLogo />
        {/*<p className="font-bold text-inherit">Сибтранссервис</p>*/}
      </NavbarBrand>
      <NavbarContent justify={"center"}>
        <NavBar />
        {/*<h1 className="font-bold text-inherit">*/}
        {/*  Информационный портал Сибтранссервис*/}
        {/*</h1>*/}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem
          className="lg:flex text-3xl cursor-pointer"
          onClick={() => toggleTheme()}
        >
          {theme === "light" ? <FaRegMoon /> : <LuSunMedium />}
        </NavbarItem>
        <NavbarItem></NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
