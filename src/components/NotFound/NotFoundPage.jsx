import React from "react";
import style from './NotFound.module.css';
import { NavLink } from "react-router-dom";


const NotFoundComponent = (props) => {
    return (
        <div className={style.wrapp}>
            <h1 className={style.title}>404</h1>
            <h2 className={style.subtitle}>Такой страницы нет</h2>
            <h3 className={style.description}>Но есть много других страниц</h3>
            <ul className={style.list}>
                <li className={style.listItem}>
                    <NavLink to='/profile'>
                        Profile
                    </NavLink>
                </li>
                <li className={style.listItem}>
                    <NavLink to='/messages'>
                        Messages
                    </NavLink>
                </li>
                <li className={style.listItem}>
                    <NavLink to='/users'>
                        Users
                    </NavLink>
                </li>
                <li className={style.listItem}>
                    <NavLink to='/login'>
                        Login
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NotFoundComponent