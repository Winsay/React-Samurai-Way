import { connect } from "react-redux";
import { getUsersThunkCreator, changePageTC, showMoreTC, changeFollowTC, useSelectorsTC } from "../../redux/users-reducer";
import axios from "axios";
import React from "react";
import UsersFunc from "./UsersFunc";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Navigate } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { compose } from "redux";
import {
    // getUserInfoSuper,
    getUsersInfo,
    getPageSize,
    getTotalUsersCount,
    getCurentPage,
    getIsFetching,
    getFollowingInProgress,
    getIsFollowed,
    getSearchInputValue
} from "../../redux/users-selectors";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.curentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.curentPage, this.props.pageSize).then(response => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items);
        //     this.props.setTotalUsersCount(response.totalCount);
        // });
    }


    onChangePage = (newPage) => {
        this.props.changePageTC(newPage, this.props.pageSize, this.props.isFollowed, this.props.searchInputValue);

        // this.props.toggleIsFetching(true);
        // this.props.setPage(newPage);
        // usersAPI.getUsers(newPage, this.props.pageSize).then(response => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items)
        // });

    }

    onShowMore = async (pagesCount) => {
        if (pagesCount / 2 < this.props.curentPage) {
            await this.props.changePageTC(Math.ceil(this.props.curentPage / 2), this.props.pageSize);
            this.props.showMoreTC(Math.ceil(this.props.curentPage), this.props.pageSize, this.props.isFollowed, this.props.searchInputValue);
        } else {
            this.props.showMoreTC(this.props.curentPage, this.props.pageSize, this.props.isFollowed, this.props.searchInputValue);
        }


        // this.props.showMore();
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.curentPage, this.props.pageSize + 4).then(response => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items)
        // });
    }

    onUsingSelectors = (searchInputValue, isFollowed) => {
        this.props.useSelectorsTC(searchInputValue, isFollowed, this.props.pageSize)
    }

    onChangeFollow = (id) => {
        // правильный вариант в которым UI компонента не занимается запросами на сервер и не производит их менеджмент, а просто вызывает коллбэк функцию

        this.props.changeFollowTC(id, this.props.isFollowed, this.props.pageSize)


        // этот вариант так же является неправильным, так как хоть мы и вынесли запросы в DAL(data access layer), но все равно менеджмент респонсов происходит в UI ккомпоненте, что является некоректным

        // this.props.toggleInFollowingProgress(true, id);
        // usersAPI.followChange.followedCheck(id).then(response => {
        //     let followStatus = response;
        //     if (followStatus === false) {
        //         usersAPI.followChange.following(id).then(response => {
        //             if (response.resultCode === 0) {
        //                 this.props.followChanged(id, followStatus = true);
        //             }
        //             this.props.toggleInFollowingProgress(false, id)
        //         })
        //     } else if (followStatus === true) {
        //         usersAPI.followChange.unfollowing(id).then(response => {
        //             if (response.resultCode === 0) {
        //                 this.props.toggleInFollowingProgress(false, id)
        //                 this.props.followChanged(id, followStatus = false);
        //             }
        //         })
        //     }
        // })


        // снизу неправильный вариант, так как запросы на сервер не должны делаться из UI (функциональных или классовых компонентов) это функция BLL уровня, то есть Redux


        // axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, { withCredentials: true }).then(response => {
        //     let followStatus = response.data;
        //     if (followStatus === false) {
        //         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, { withCredentials: true, headers: { "API-KEY": '5edbe232-6099-4ee4-9271-b8f81afb7d19' } }).then(response => {
        //             if (response.data.resultCode === 0) {
        //                 props.followChanged(props.id, followStatus = true)
        //             }
        //         })
        //     } else if (followStatus === true) {
        //         axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, { withCredentials: true, headers: { "API-KEY": '5edbe232-6099-4ee4-9271-b8f81afb7d19' } }).then(response => {
        //             if (response.data.resultCode === 0) {
        //                 props.followChanged(props.id, followStatus = false)
        //             }
        //         })
        //     }
        // });
        // this.props.followChanged(id)
    }



    render() {
        return (
            <UsersFunc props={this.props} onChangePage={this.onChangePage} onShowMore={this.onShowMore} onChangeFollow={this.onChangeFollow} onUsingSelectors={this.onUsingSelectors} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        // usersInfo: getUserInfoSuper(state), // при использовании библиотеки reselect мы можем создать сложный селектор который будет обновляться только при изменении входящих в него значений
        usersInfo: getUsersInfo(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        curentPage: getCurentPage(state),
        isFollowed: getIsFollowed(state),
        searchInputValue: getSearchInputValue(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: state.auth.isAuth

        // usersInfo: state.usersPage.userInfo,
        // pageSize: state.usersPage.pageSize,
        // totalUsersCount: state.usersPage.totalUsersCount,
        // curentPage: state.usersPage.curentPage,
        // isFetching: state.usersPage.isFetching,
        // followingInProgress: state.usersPage.followingInProgress,
    }
}
// let mapStateToProps = (state) => {
//     return {
//         userInfo: state.usersPage.userInfo,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         curentPage: state.usersPage.curentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

// вариант развернутого кода в котором мы сами создаем функцию которая умеет диспатчить экшены, но редакс нам позволяет упростить код, просто внося необходимые функции в конект при
// помощи деструктуризации, а редакс после этого уже самостоятельно создаст экшн криейтор и задиспатчит

// let mapDispatchToProps = (dispatch) => {
//     return {
//         followChange: (id) => {
//             dispatch(followChangedActionCreator(id))
//         },
//         setUsers: (userInfo) => {
//             dispatch(setUsersAC(userInfo))
//         },
//         changePage: (newPage) => {
//             dispatch(setPageAC(newPage))
//         },
//         setTotalUsersCount: (usersCount) => {
//             dispatch(setTotalUsersCountAC(usersCount))
//         },
//         showMore: () => {
//             dispatch(showMoreAC())
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }



const UsersContainer = compose(
    connect(mapStateToProps, { getUsersThunkCreator, changePageTC, showMoreTC, changeFollowTC, useSelectorsTC }),
    // withAuthRedirect
)(UsersAPIComponent)

export default UsersContainer;