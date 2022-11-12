import React from "react";
import style from './Post.module.css'


export default function MyPost(props) {
    return (
        <div className={style.posts}>
            <img src="img/durov.jpg" alt="prof" className={style.profilePic} />
            <p className={style.postsText}>{props.postText}</p>
        </div>
    )
}