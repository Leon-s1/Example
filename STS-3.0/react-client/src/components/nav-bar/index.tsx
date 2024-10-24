import React from "react"
import { BsPostcard } from "react-icons/bs"
import { FaUsers } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import NavButton from "../nav-button"

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-5">
        <li>
          <NavButton href="/" icon={<BsPostcard />}>
            Внутренние телефоны Сибтранссервис
          </NavButton>
        </li>
        <li>
          <NavButton href="user-profile" icon={<FiUsers />}>
            Сотрудники
          </NavButton>
        </li>
        <li>
          <NavButton href="/" icon={<FaUsers />}>
            Компания
          </NavButton>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
