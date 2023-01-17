import React from "react";
import style from './Post.module.css'
import Preloader from "../../../common/preloader/Preloader";


export default function MyPost(props) {


    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style.posts}>
            <img src={!props.profile.photos.small ? "/img/avatar.png" : props.profile.photos.small} alt="prof" className={style.profilePic} />
            <p className={style.postsText}>{props.postText}</p>
        </div>
    )
}