import React from "react";
import style from './MyPosts.module.css'
import MyPost from "./Post/Post";

export default function MyPosts(props) {

    const Post = props.dataPost.map((item, index) => (
        <MyPost id={item.id} postText={item.text} key={index} />
    ))


    const newPostElement = React.createRef();
    return (
        <div className={style.mainPost}>
            <h2 className={style.postTitle}>My posts</h2>
            <input type="text" ref={newPostElement} onChange={() => props.dispatch({ type: "UPDATE-POST", Newtext: newPostElement.current.value })} value={props.postValue} placeholder="your news..." className={style.postInp} />
            <button onClick={() => props.dispatch({ type: "ADD-POST" })} className={style.postSend}>Send</button>
            <div className={style.postsWrapper}>
                {Post}
            </div>
        </div >
    )
}