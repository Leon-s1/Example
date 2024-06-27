import React from 'react';
import {NavButton} from "../nav-button";
import {BsPostcard} from "react-icons/bs";

export const NavBar = () => {
    return (
        <nav>
            <ul className="flex flex-col gap-5">
                <li>
                    <NavButton icon={<BsPostcard/>} href='/'>
                        Посты
                    </NavButton>
                </li>
                <li>
                    <NavButton icon={<BsPostcard/>} href='following'>
                        Подписки
                    </NavButton>
                </li>
                <li>
                    <NavButton icon={<BsPostcard/>} href='followers'>
                        Подписчики
                    </NavButton>
                </li>
            </ul>
        </nav>
    );
};
