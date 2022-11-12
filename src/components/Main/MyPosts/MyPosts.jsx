import React from "react";
import style from './MyPosts.module.css'
import MyPost from "./Post/Post";


export default function MyPosts() {
    const dataPost = [
        { id: 1, text: 'Hey, why nobody loves me?' },
        { id: 2, text: 'Durov return wall' },
    ]
    return (
        <div className={style.mainPost}>
            <h2 className={style.postTitle}>My posts</h2>
            <input type="text" placeholder="your news..." className={style.postInp} />
            <button className={style.postSend}>Send</button>
            <MyPost id={dataPost[0].id} postText={dataPost[0].text} />
            <MyPost id={dataPost[1].id} postText={dataPost[1].text} />
        </div>
    )
}