import { connect } from "react-redux";
import { loginUserTC } from "../../redux/auth-reducer";
import Login from "./Login";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage
    }
}

const userLogin = (data) => {
    const { rememberMe, email, password } = data
    return loginUserTC({ email, password, rememberMe });
}


const LoginContainer = connect(mapStateToProps, { userLogin })(Login);
export default LoginContainer;