import React from "react";
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom'


export default function Nav() {
    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <NavLink to='/profile' className={({ isActive }) => (isActive ? style.active : style.navLink)} >
                        Profile
                    </NavLink>
                </li>

                <li className={style.navItem}>
                    <NavLink to='/messages' className={({ isActive }) => (isActive ? style.active : style.navLink)}>
                        Messages
                    </NavLink>
                </li>
                <li className={style.navItem}>
                    <a href="/news" className={style.navLink}>
                        News
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="/music" className={style.navLink}>
                        Music
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="/settings" className={style.navLink}>
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    )
}