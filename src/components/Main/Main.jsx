import React from "react";
import style from './Main.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserInfo from "./UserInfo/UserInfo";


export default function Profile(props) {
    return (
        <div>
            <img className={style.anime} src="img/anime.jpg" alt="anime" />
            <div className={style.mainInfo}>
                <UserInfo />
            </div>
            <MyPostsContainer />
        </div>
    )
}