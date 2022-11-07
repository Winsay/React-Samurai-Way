import React from "react";
import style from './Nav.module.css'


export default function Nav() {
    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <a href="#s" className={style.navLink}>
                        Profile
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#s" className={style.navLink}>
                        Messages
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#s" className={style.navLink}>
                        News
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#s" className={style.navLink}>
                        Music
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#s" className={style.navLink}>
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    )
}