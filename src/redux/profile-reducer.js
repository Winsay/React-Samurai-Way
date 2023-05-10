import { profileAPI } from "../api/api";

const ADD_POST = "social-network/profile/ADD-POST";
const DELETE_POST = "social-network/profile/DELETE-POST";
const SET_USER_PROFILE = "social-network/profile/SET-USER-PROFILE";
const GET_USERS_STATUS = "social-network/profile/GET-USERS-STATUS";
const SET_USERS_STATUS = "social-network/profile/SET-USERS-STATUS";
const SET_NEW_PROFILE_PHOTOS = 'social-network/profile/SET-NEW-PROFILE-PHOTOS';
const AWAIT_RESPONSE_INFO = 'social-network/profile/AWAIT-RESPONSE-INFO'


let initialState = {
    dataPost: [
        { id: 1, text: 'Hey, why nobody loves me?' },
        { id: 2, text: 'Durov return wall' },
        { id: 3, text: 'Make America great again' },
        { id: 4, text: 'Thank God i\'m not a Muscovite' },
        { id: 5, text: 'Glory to Ukraine' },
    ],
    profile: null,
    status: '',
    awaitResponseInfo: false
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
                profile: { ...action.profile }
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
        case SET_NEW_PROFILE_PHOTOS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos },
            }
        case AWAIT_RESPONSE_INFO:
            return {
                ...state,
                awaitResponseInfo: action.value
            }
        default: return state
    }
}

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText }) // можно не писать return
export const deletePostActioncreator = (postId) => ({ type: DELETE_POST, postId }) // можно не писать return


export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUsersStatus = (status) => ({ type: GET_USERS_STATUS, status })
export const setUsersStatus = (status) => ({ type: SET_USERS_STATUS, status })
export const setNewProfilePhoto = (photos) => ({ type: SET_NEW_PROFILE_PHOTOS, photos })
export const awaitResponseInfoAC = (value) => ({ type: AWAIT_RESPONSE_INFO, value })



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

export const setNewProfilePhotoTC = (photoFile) => async (dispatch) => {
    let response = await profileAPI.setNewProfilePhoto(photoFile);
    if (response.resultCode === 0) {
        dispatch(setNewProfilePhoto(response.data.photos))
    }
}

export const setNewUserInfoTC = (data) => async (dispatch) => {
    dispatch(awaitResponseInfoAC(true))
    let response = await profileAPI.setNewUserInfo(data)
    if (response.resultCode === 0) {
        dispatch(setUsersTC(data.userId))
    }
    dispatch(awaitResponseInfoAC(false))
}


export default profileReducer;