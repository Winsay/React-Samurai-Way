import React from "react";
import style from './Friend.module.css'


export default function Friend(props) {
    return (
        <div className={style.friend}>
            <img src={props.imgUrl} alt="friendPic" className={style.friendImg} />
            <h3 className={style.friendName}>{props.name}</h3>
        </div>
    )
}