import React from "react";
import style from './Main.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserInfo from "./UserInfo/UserInfo";
import anime from '../../assets/img/anime.jpg'

export default function Profile(props) {
    return (
        <div>
            <img className={style.anime} src={anime} alt="anime" />
            <div className={style.mainInfo}>
                <UserInfo awaitResponseInfo={props.awaitResponseInfo} changeUserInfo={props.changeUserInfo} changeProfilePhoto={props.changeProfilePhoto} authProfileId={props.authProfileId} profile={props.profile} status={props.status} onSetUsersStatus={props.onSetUsersStatus} />
            </div>
            <MyPostsContainer profile={props.profile} />
        </div>
    )
}