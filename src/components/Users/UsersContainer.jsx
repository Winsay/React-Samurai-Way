import { connect } from "react-redux";
import { followChangedActionCreator, setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        userInfo: state.usersPage.userInfo,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followChange: (id) => {
            dispatch(followChangedActionCreator(id))
        },
        setUsers: (userInfo) => {
            dispatch(setUsersAC(userInfo))
        }
    }
}




const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;