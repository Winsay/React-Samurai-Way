
const SET_USER_DATA = "SET-USER-DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authProfile: null
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default: return state;
    }
}


export const setUserData = (userId, login, email, authProfile) => {
    return {
        type: SET_USER_DATA,
        data: { userId, login, email, authProfile }
    }
}






export default authReducer;