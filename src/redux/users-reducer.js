const CHANGE_FOLLOW = 'CHANGE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SHOW_MORE = 'SHOW-MORE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    userInfo: [
        // { id: 1, imgURL: 'img/durov.jpg', isFollow: true, fullName: 'Alex', status: 'i\'m alive', location: { city: 'Dnepr,', country: 'Ukraine' } },
        // { id: 2, imgURL: 'img/Poliak.jpg', isFollow: false, fullName: 'Kshishtof', status: 'Tolko edno w glowe mam', location: { city: 'Wroclaw,', country: 'Poland' } },
        // { id: 3, imgURL: 'img/Mannerheim.png', isFollow: true, fullName: 'Mannergeim', status: 'Coctail for Molotov', location: { city: 'Helsinki,', country: 'Finland' } },
        // { id: 4, imgURL: 'img/Obama.jpg', isFollow: false, fullName: 'Johny', status: 'Obama is my presedent', location: { city: 'Los-Angeles,', country: 'USA' } }
    ],
    pageSize: 4,
    totalUsersCount: 0,
    curentPage: 1,
    isFetching: true,
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW:
            return {
                ...state,
                userInfo: state.userInfo.map((user) => (
                    user.id === action.id
                        ? { ...user, followed: action.followStatus }
                        : user
                ))

            }
        case SET_USERS:
            return {
                ...state,
                userInfo: [...action.userInfo]
            }
        case SET_PAGE:
            return {
                ...state,
                curentPage: action.page,
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case SHOW_MORE:
            return {
                ...state,
                pageSize: state.pageSize + 4
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default: return state;
    }
}


export const followChanged = (id, followStatus) => {
    return {
        type: CHANGE_FOLLOW,
        id: id,
        followStatus: followStatus
    }
}

export const setUsers = (userInfo) => {
    return {
        type: SET_USERS,
        userInfo,
    }
}

export const setPage = (newPage) => {
    return {
        type: SET_PAGE,
        page: newPage,
    }
}
export const setTotalUsersCount = (usersCount) => {
    return {
        type: SET_USERS_COUNT,
        usersCount: usersCount,
    }
}
export const showMore = () => {
    return {
        type: SHOW_MORE,
    }
}
export const toggleIsFetching = (fetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: fetching
    }
}





export default usersReducer;