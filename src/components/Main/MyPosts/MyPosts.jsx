import React from "react";
import style from './MyPosts.module.css'
import MyPost from "./Post/Post";


export default function MyPosts(props) {
    function onAddPost() {
        props.addPost();
    }

    function updatePost(event) {
        let text = event.target.value;
        props.updatePostText(text)
    }

    const Post = props.dataPost.map((item, index) => (
        <MyPost id={item.id} postText={item.text} key={index} profile={props.profile} />
    ))


    return (
        <div className={style.mainPost}>
            <h2 className={style.postTitle}>My posts</h2>
            <input type="text" onChange={updatePost} value={props.postValue} placeholder="your news..." className={style.postInp} />
            <button onClick={onAddPost} className={style.postSend}>Send</button>
            <div className={style.postsWrapper}>
                {Post}
            </div>
        </div >
    )
}