import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setUserData } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
            if (response.data.resultCode === 0) {

                let { id, login, email } = response.data.data;
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id).then(response => {
                    this.props.setUserData(id, login, email, response.data);
                });
            }
        });
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

export default connect(mapStateToProps, { setUserData })(HeaderContainer)

