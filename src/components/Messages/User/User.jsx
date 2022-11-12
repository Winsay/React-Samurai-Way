import React from "react";
import { NavLink } from "react-router-dom";
import style from './User.module.css'

export default function User(props) {
    return (
        <div className={style.user}>
            <NavLink to={`/messages/${props.userId}`} className={({ isActive }) => (isActive ? style.active : '')}>{props.userName}</NavLink>
        </div>
    )
}

