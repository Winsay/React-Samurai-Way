import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css'


export default function Header() {
    return (
        <header className={style.header}>
            <NavLink to={'/profile'}>
                <img src="https://upload.wikimedia.org/wikipedia/uk/thumb/c/c4/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg/2048px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg.png" alt="" />
            </NavLink>
        </header>
    )
}