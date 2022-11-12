import React from "react";
import style from './Message.module.css'

export default function User(props) {
    return (
        <div className={style.message}>{props.messageText}</div>
    )
}

