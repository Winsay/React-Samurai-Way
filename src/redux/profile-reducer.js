import { profileAPI } from "../api/api";

const ADD_POST = "social-network/profile/ADD-POST";
const DELETE_POST = "social-network/profile/DELETE-POST";
const SET_USER_PROFILE = "social-network/profile/SET-USER-PROFILE";
const GET_USERS_STATUS = "social-network/profile/GET-USERS-STATUS";
const SET_USERS_STATUS = "social-network/profile/SET-USERS-STATUS";


let initialState = {
    dataPost: [
        { id: 1, text: 'Hey, why nobody loves me?' },
        { id: 2, text: 'Durov return wall' },
        { id: 3, text: 'Make America great again' },
        { id: 4, text: 'Thank God i\'m not a Muscovite' },
        { id: 5, text: 'Glory to Ukraine' },
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                dataPost: [...state.dataPost, { id: state.dataPost.length + 1, text: action.postText }],
            }

        case DELETE_POST:
            return {
                ...state,
                dataPost: state.dataPost.filter(e => e.id !== action.postId)
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case GET_USERS_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USERS_STATUS:
            return {
                ...state,
                status: action.status
            }

        default: return state
    }
}

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText }) // можно не писать return
export const deletePostActioncreator = (postId) => ({ type: DELETE_POST, postId }) // можно не писать return


export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUsersStatus = (status) => ({ type: GET_USERS_STATUS, status })
export const setUsersStatus = (status) => ({ type: SET_USERS_STATUS, status })


export const setUsersTC = (userId) => async (dispatch) => {
    let response = await profileAPI.setUsersProfile(userId);
    dispatch(setUserProfile(response));
}

export const getUsersStatusTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getUsersStatus(userId);
    dispatch(getUsersStatus(response))
}

export const setUsersStatusTC = (status) => async (dispatch) => {
    let response = await profileAPI.setUsersStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUsersStatus(status))
    }
}
export default profileReducer;