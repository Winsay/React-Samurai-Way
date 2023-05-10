import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import { setFriendDataTC } from "../../redux/friend-reducer";


class NavContainer extends React.Component {

    componentDidMount() {
        this.props.setFriendDataTC(this.props.isAuth)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.isAuth !== this.props.isAuth) {
            this.props.setFriendDataTC(this.props.isAuth)
        }
    }

    render() {
        return <Nav friends={this.props.friends} />
    }
}

const mapStateToProps = (state) => {
    return {
        totalUsersCount: state.usersPage.totalUsersCount,
        friends: state.friendsReducer.friends,
        isAuth: state.auth.isAuth,
    }
}


const NavComponent = connect(mapStateToProps, { setFriendDataTC })(NavContainer)
export default NavComponent