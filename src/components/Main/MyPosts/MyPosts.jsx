import React from "react";
import style from './MyPosts.module.css'
import MyPost from "./Post/Post";
import { useForm } from "react-hook-form";


let PostForm = (props) => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
        mode: 'all',
    });

    const onSubmit = (data) => {
        if (data.postText.length >= 2) {
            props.addPost(data.postText)
        }
        reset();
    }
    return (
        <form className={style.formPost} onSubmit={handleSubmit(onSubmit)}>
            <textarea
                className={errors?.postText ? style.errorForm : ''}
                rows='3'
                cols={150}
                maxLength='301'
                placeholder="Enter your post..."
                {...register('postText', {
                    required: false,
                    minLength: {
                        value: 2,
                        message: 'Минимальная длина 2 символа!'
                    },
                    maxLength: {
                        value: 300,
                        message: 'Максимальная длина 250 символов!'
                    }
                })} />
            <div className={style.errorMessage}>{errors?.postText && <p>{errors?.postText?.message || 'error'}</p>}</div>
            <input disabled={!isValid} type={"submit"} value={'Send'} />
        </form>
    )
}


export default function MyPosts(props) {

    const Post = props.dataPost.map((item, index) => (
        <MyPost id={item.id} postText={item.text} key={index} profile={props.profile} />
    ))


    return (
        <div className={style.mainPost}>
            <h2 className={style.postTitle}>My posts</h2>
            <PostForm {...props} />
            <div className={style.postsWrapper}>
                {Post}
            </div>
        </div >
    )
}