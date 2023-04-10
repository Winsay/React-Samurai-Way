import React from "react";
import style from './Friend.module.css';
import { NavLink } from "react-router-dom";


export default function Friend(props) {
    return (
        <NavLink className={style.friend} to={`/profile/${props.id}`}>
            <div>
                <img src={props.photo || 'img/avatar.png'} alt="friendPic" className={style.friendImg} />
                <h3 className={style.friendName}>{props.name}</h3>
            </div>
        </NavLink>

    )
}