import { connect } from "react-redux";
import { followChanged, setPage, setUsers, setTotalUsersCount, showMore, toggleIsFetching } from "../../redux/users-reducer";
import axios from "axios";
import React from "react";
import UsersFunc from "./UsersFunc";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`, { withCredentials: true }).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }


    onChangePage = (newPage) => {
        this.props.toggleIsFetching(true);
        this.props.setPage(newPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPage}&count=${this.props.pageSize}`, { withCredentials: true }).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        });

    }

    onShowMore = () => {
        this.props.showMore();
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize + 4}`, { withCredentials: true }).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        });
    }


    render() {
        return (
            <UsersFunc props={this.props} onChangePage={this.onChangePage} onShowMore={this.onShowMore} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userInfo: state.usersPage.userInfo,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        curentPage: state.usersPage.curentPage,
        isFetching: state.usersPage.isFetching,
    }
}

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




const UsersContainer = connect(mapStateToProps, { followChanged, setUsers, setPage, setTotalUsersCount, showMore, toggleIsFetching })(UsersAPIComponent);
export default UsersContainer;