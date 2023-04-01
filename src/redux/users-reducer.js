import { usersAPI } from "../api/api";


const CHANGE_FOLLOW = 'CHANGE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SHOW_MORE = 'SHOW-MORE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IN_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

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
    followingInProgress: []
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
        case TOGGLE_IN_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowingProgress ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
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
export const toggleInFollowingProgress = (isFollowingProgress, userId) => {
    return {
        type: TOGGLE_IN_FOLLOWING_PROGRESS,
        isFollowingProgress: isFollowingProgress,
        userId: userId
    }
}



export const getUsersThunkCreator = (curentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(curentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
        });
    }
}

export const changePageTC = (newPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setPage(newPage));
        usersAPI.getUsers(newPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items))
        });
    }
}
export const showMoreTC = (curentPage, pageSize) => {
    return (dispatch) => {
        dispatch(showMore());
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(curentPage, pageSize + 4).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items))
        });
    }
}

export const changeFollowTC = (id) => {
    return (dispatch) => {
        dispatch(toggleInFollowingProgress(true, id));
        usersAPI.followChange.followedCheck(id).then(response => {
            let followStatus = response;
            if (!followStatus) {
                usersAPI.followChange.following(id).then(response => {
                    if (response.resultCode === 0) {
                        dispatch(followChanged(id, followStatus = true));
                    }
                    dispatch(toggleInFollowingProgress(false, id))
                })
            } else if (followStatus) {
                usersAPI.followChange.unfollowing(id).then(response => {
                    if (response.resultCode === 0) {
                        dispatch(toggleInFollowingProgress(false, id))
                        dispatch(followChanged(id, followStatus = false));
                    }
                })
            }
        })

    }
}


export default usersReducer;