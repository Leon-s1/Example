import React from "react"
import { BsFillTelephoneFill } from "react-icons/bs"
import { CgSoftwareDownload } from "react-icons/cg"
import { FiUsers } from "react-icons/fi"
import { RiOrganizationChart } from "react-icons/ri"
import NavButton from "../nav-button"

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-5">
        <li>
          <NavButton href="/" icon={<BsFillTelephoneFill />}>
            Телефоны
          </NavButton>
        </li>
        <li>
          <NavButton href="user-profile" icon={<FiUsers />}>
            Сотрудники
          </NavButton>
        </li>
        <li>
          <NavButton href="company" icon={<RiOrganizationChart />}>
            Компания
          </NavButton>
        </li>
        <li>
          <NavButton href="software" icon={<CgSoftwareDownload />}>
            Программы
          </NavButton>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
