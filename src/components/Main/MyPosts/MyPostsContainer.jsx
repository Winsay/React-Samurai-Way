import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        dataPost: state.profilePage.dataPost,
        postValue: state.profilePage.postValue,
        profile: state.profilePage.profile
    }
}

const addPost = (postText) => {
    return addPostActionCreator(postText);
}


const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);
export default MyPostsContainer;