import React from "react";
import style from './MyPosts.module.css'
import MyPost from "./Post/Post";


export default function MyPosts(props) {

    const Post = props.dataPost.map((item, index) => (
        <MyPost id={item.id} postText={item.text} key={index} />
    ))
    return (
        <div className={style.mainPost}>
            <h2 className={style.postTitle}>My posts</h2>
            <input type="text" placeholder="your news..." className={style.postInp} />
            <button className={style.postSend}>Send</button>
            <div className={style.postsWrapper}>
                {Post}
            </div>
        </div>
    )
}