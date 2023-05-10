import React from "react";
import Header from "./Header";
import axios from "axios";
import { redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUserTC, setUserDataTC } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    makeLogout = () => {
        this.props.logoutUserTC();
    }


    render() {
        return <Header {...this.props} makeLogout={this.makeLogout} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authProfile: state.auth.authProfile,
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { logoutUserTC, setUserDataTC })(HeaderContainer)

