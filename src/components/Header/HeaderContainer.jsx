import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setUserDataTC } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setUserDataTC();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authProfile: state.auth.authProfile
})

export default connect(mapStateToProps, { setUserDataTC })(HeaderContainer)

