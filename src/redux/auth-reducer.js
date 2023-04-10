import { authAPI } from "../api/api";
const SET_USER_DATA = "social-network/auth/SET-USER-DATA";
const GET_AUTH_ERROR = "social-network/auth/GET-AUTH-ERROR";

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
    let response = await authAPI.loginingProces(data)
    if (response.resultCode === 0) {
        dispatch(setUserDataTC());
    } else if (response.resultCode !== 0) {
        dispatch(getAuthError(response.messages[0]))
    }
}

export const logoutUserTC = () => async (dispatch) => {
    let response = await authAPI.logoutProces()
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false, null))
    }
}






export default authReducer;