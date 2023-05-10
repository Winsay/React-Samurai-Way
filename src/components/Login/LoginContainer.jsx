import { connect } from "react-redux";
import { loginUserTC } from "../../redux/auth-reducer";
import Login from "./Login";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage,
        captchaURL: state.auth.captchaURL,
    }
}

const userLogin = (data) => {
    debugger;
    const { captchaValue, email, password, rememberMe } = data;
    return loginUserTC({ email, password, rememberMe, captcha: captchaValue });
}


const LoginContainer = connect(mapStateToProps, { userLogin })(Login);
export default LoginContainer;