import React from "react";
import style from './Post.module.css'
import Preloader from "../../../common/preloader/Preloader";
import avatar from '../../../../assets/img/avatar.png'

export default function MyPost(props) {


    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style.posts}>
            <img src={!props.profile.photos.small ? avatar : props.profile.photos.small} alt="prof" className={style.profilePic} />
            <p className={style.postsText}>{props.postText}</p>
        </div>
    )
}