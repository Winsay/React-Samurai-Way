import { authAPI } from "../api/api"
const SET_USER_DATA = "SET-USER-DATA";
const GET_AUTH_ERROR = "GET-AUTH-ERROR";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,//
    authProfile: null,
    errorMessage: null
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

        default: return state;
    }
}


export const setUserData = (userId, login, email, isAuth, authProfile) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login, isAuth, authProfile }
    }
}
export const getAuthError = (error) => {
    return {
        type: GET_AUTH_ERROR,
        error
    }
}


export const setUserDataTC = () => (dispatch) => {
    return authAPI.auth().then(response => {
        if (response.resultCode === 0) {
            let { id, login, email } = response.data;
            return authAPI.getProfile(id).then(response => {
                dispatch(setUserData(id, login, email, true, response));
            });
        }
    })
}

export const loginUserTC = (data) => (dispatch) => {
    authAPI.loginingProces(data).then(response => {
        if (response.resultCode === 0) {
            dispatch(setUserDataTC());
        } else if (response.resultCode !== 0) {
            dispatch(getAuthError(response.messages[0]))
        }
    })
}

export const logoutUserTC = () => (dispatch) => {
    authAPI.logoutProces().then(response => {
        if (response.resultCode === 0) {
            dispatch(setUserData(null, null, null, false, null))
        }
    })
}






export default authReducer;