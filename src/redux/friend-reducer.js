import { profileAPI } from "../api/api";
const SET_FRIENDS = 'social-network/friends/SET-FRIENDS'


let initialState = {
    friends: []
}

const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...action.friendData]
            }
        default: return state;
    }
}

const setFriendAC = (friendData) => ({ type: SET_FRIENDS, friendData })


export const setFriendDataTC = (usersCount) => async (dispatch) => {
    const result = [];
    for (let i = 0; i < 3; i++) {
        let randomId = Math.round((Math.random() * usersCount));
        let friendData = await profileAPI.setUsersProfile(randomId);
        result.push({ id: friendData.userId, name: friendData.fullName, photo: friendData.photos.small })
    }
    dispatch(setFriendAC(result))
}

export default friendReducer;