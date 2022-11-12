import React from "react";
import style from './Main.module.css'
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";


export default function Profile() {
    return (
        <div>
            <img className={style.anime} src="img/anime.jpg" alt="anime" />
            <div className={style.mainInfo}>
                <UserInfo />
            </div>
            <MyPosts />
        </div>
    )
}