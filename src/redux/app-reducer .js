import { usersAPI } from "../api/api";
import { setUserDataTC, logoutUserTC } from "./auth-reducer";
import { getUsersThunkCreator } from "./users-reducer";


const SET_INITIALIZED = "social-network/app/SET-INITIALIZED"



let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default: return state;
    }
}


const setInitializedAC = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const initializationAppTC = () => (dispatch) => {
    let promise = dispatch(setUserDataTC());
    let promiseTwo = dispatch(getUsersThunkCreator())
    // dispatch(somethingElse())
    Promise.all([promise, promiseTwo]).then(() => {
        dispatch(setInitializedAC())
    })
}

export default appReducer;