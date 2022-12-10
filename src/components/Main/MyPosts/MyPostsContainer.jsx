import React from "react";
import { updatePostActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import storeContext from "../../../storeContext";
import MyPosts from "./MyPosts";


export default function MyPostsContainer(props) {

    return (
        <storeContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    function addPost() {
                        store.dispatch(addPostActionCreator());
                    }

                    function updatePost(text) {
                        let action = updatePostActionCreator(text)
                        store.dispatch(action)
                    }
                    return <MyPosts
                        updatePostText={updatePost}
                        addPost={addPost}
                        dataPost={state.profilePage.dataPost}
                        postValue={state.profilePage.postValue} />
                }
            }
        </storeContext.Consumer>
    )
}