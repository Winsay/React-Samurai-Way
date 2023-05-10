import { authAPI } from "../api/api";
const SET_USER_DATA = "social-network/auth/SET-USER-DATA";
const GET_AUTH_ERROR = "social-network/auth/GET-AUTH-ERROR";
const SET_NEW_PROFILE_PHOTOS = 'social-network/profile/SET-NEW-PROFILE-PHOTOS';
const GET_CAPTCHA_URL = "GET-CAPTCHA-URL"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authProfile: null,
    errorMessage: null,
    captchaURL: false,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        case GET_AUTH_ERROR:
            return {
                ...state,
                errorMessage: action.error
            }

        case SET_NEW_PROFILE_PHOTOS:
            return {
                ...state,
                authProfile: { ...state.authProfile, photos: action.photos }
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.captchaURL,
            }
        default: return state;
    }
}


export const setUserData = (userId, login, email, isAuth, authProfile, errorMessage, captchaURL) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login, isAuth, authProfile, errorMessage, captchaURL }
    }
}
export const getAuthError = (error) => {
    return {
        type: GET_AUTH_ERROR,
        error
    }
}

export const getCaptchaAC = (captchaURL) => {
    return {
        type: GET_CAPTCHA_URL,
        captchaURL,
    }
}

// export const setUserDataTC = () => (dispatch) => {
//     return authAPI.auth().then(response => {
//         if (response.resultCode === 0) {
//             let { id, login, email } = response.data;
//             return authAPI.getProfile(id).then(response => {
//                 dispatch(setUserData(id, login, email, true, response));
//             });
//         }
//     })
// }


export const setUserDataTC = () => async (dispatch) => {
    let firstResponse = await authAPI.auth();
    if (firstResponse.resultCode === 0) {
        let { id, login, email } = firstResponse.data;
        let response = await authAPI.getProfile(id);
        dispatch(setUserData(id, login, email, true, response));
        return response;
    }
    return firstResponse;
}

export const loginUserTC = (data) => async (dispatch) => {
    debugger
    let response = await authAPI.loginingProces(data)
    if (response.resultCode === 0) {
        dispatch(setUserDataTC());
        dispatch(getCaptchaAC(null))
    } else if (response.resultCode !== 0) {
        if (response.resultCode === 10) {
            let response = await authAPI.getChaptchaURL()
            dispatch(getCaptchaAC(response.url))
        }
        dispatch(getAuthError(response.messages[0]))
    }
}

export const logoutUserTC = () => async (dispatch) => {
    let response = await authAPI.logoutProces()
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false, null, null, false))
    }
}






export default authReducer;