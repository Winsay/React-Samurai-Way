const CHANGE_FOLLOW = 'CHANGE-FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    userInfo: [
        // { id: 1, imgURL: 'img/durov.jpg', isFollow: true, fullName: 'Alex', status: 'i\'m alive', location: { city: 'Dnepr,', country: 'Ukraine' } },
        // { id: 2, imgURL: 'img/Poliak.jpg', isFollow: false, fullName: 'Kshishtof', status: 'Tolko edno w glowe mam', location: { city: 'Wroclaw,', country: 'Poland' } },
        // { id: 3, imgURL: 'img/Mannerheim.png', isFollow: true, fullName: 'Mannergeim', status: 'Coctail for Molotov', location: { city: 'Helsinki,', country: 'Finland' } },
        // { id: 4, imgURL: 'img/Obama.jpg', isFollow: false, fullName: 'Johny', status: 'Obama is my presedent', location: { city: 'Los-Angeles,', country: 'USA' } }

    ],
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW:
            return {
                ...state,
                userInfo: state.userInfo.map((user) => (
                    user.id === action.id
                        ? { ...user, followed: !user.followed }
                        : user
                ))

            }
        case SET_USERS:
            return {
                ...state,
                userInfo: [...state.userInfo, ...action.userInfo]
            }
        default: return state;
    }
}


export const followChangedActionCreator = (id) => {
    return {
        type: CHANGE_FOLLOW,
        id: id,
    }
}

export const setUsersAC = (userInfo) => {
    return {
        type: SET_USERS,
        userInfo,
    }
}



export default usersReducer;