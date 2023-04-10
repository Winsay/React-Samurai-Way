import React from "react";
import style from './Main.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserInfo from "./UserInfo/UserInfo";


export default function Profile(props) {
    return (
        <div>
            <img className={style.anime} src="img/anime.jpg" alt="anime" />
            <div className={style.mainInfo}>
                <UserInfo authProfileId={props.authProfileId} profile={props.profile} status={props.status} onSetUsersStatus={props.onSetUsersStatus} />
            </div>
            <MyPostsContainer profile={props.profile} />
        </div>
    )
}