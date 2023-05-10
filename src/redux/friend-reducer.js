import { usersAPI } from "../api/api";
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


export const setFriendDataTC = (isAuth) => async (dispatch) => {
    debugger;
    if (isAuth) {
        const result = [];
        let friendsData = await usersAPI.getUsers(1, 3, 'true');
        for (let i = 0; i < 3; i++) {
            result.push({ id: friendsData.items[i].id, name: friendsData.items[i].name, photo: friendsData.items[i].photos.small })
        };
        dispatch(setFriendAC(result))
    } else {
        dispatch(setFriendAC([]))
    }




    // for (let i = 0; i < 3; i++) {
    //     let randomId = Math.round((Math.random() * usersCount));
    //     let friendsCount = await usersAPI.getUsers(randomId);
    //     result.push({ id: friendData.userId, name: friendData.fullName, photo: friendData.photos.small })
    // }

    // dispatch(setFriendAC(result))
}

export default friendReducer;