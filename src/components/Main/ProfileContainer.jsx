import axios from "axios";
import { connect } from "react-redux";
import { useParams, Navigate } from 'react-router-dom'
import React, { useEffect } from "react";
import Profile from "./Main";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { setUsersTC, getUsersStatusTC, setUsersStatusTC, setNewProfilePhotoTC, setNewUserInfoTC } from "../../redux/profile-reducer";
import { compose } from "redux";



class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId) {
            this.props.getUsersStatusTC(userId)
            this.props.setUsersTC(userId)
        } else {
            userId = this.props.authProfileId;
            if (userId) {
                this.props.getUsersStatusTC(userId)
                this.props.setUsersTC(userId)
            }
        }
        // if (!userId) {
        //     debugger;
        //     this.props.getUsersStatusTC(this.props.authProfileId)
        //     this.props.setUsersTC(this.props.authProfileId)
        // } else {
        //     this.props.getUsersStatusTC(userId)
        //     this.props.setUsersTC(userId)
        // }
    }

    onSetUsersStatus = (status) => {
        this.props.setUsersStatusTC(status)
    }

    changeProfilePhoto = (photoFile) => {
        this.props.setNewProfilePhotoTC(photoFile)
    }

    changeUserInfo = (data) => {
        this.props.setNewUserInfoTC(data)
    }


    componentDidUpdate(prevProps) {
        let userId = this.props.match.params.userId;
        if (!userId && userId !== prevProps.match.params.userId) {
            this.props.getUsersStatusTC(this.props.authProfileId)
            this.props.setUsersTC(this.props.authProfileId)
        }
        if (userId && userId !== prevProps.match.params.userId) {
            this.props.getUsersStatusTC(userId)
            this.props.setUsersTC(userId)
        }
    }

    render() {
        if (!this.props.authProfileId && !this.props.match.params.userId) return <Navigate to={'/login'} />
        return <Profile {...this.props} changeUserInfo={this.changeUserInfo} onSetUsersStatus={this.onSetUsersStatus} changeProfilePhoto={this.changeProfilePhoto} />
    }
}



// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth,
// })

// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authProfileId: state.auth.userId,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized,
    awaitResponseInfo: state.profilePage.awaitResponseInfo
})

function withRouter(ProfCont) {
    return (props) => {
        const match = { params: useParams() };
        return <ProfCont {...props} match={match} />
    }
}


// вот как выглядела бы та же запись, если бы не существовало функции compose.

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { setUsersTC })(WithUrlDataContainerComponent);

// конвейер функций создающих контейнеры вызываем дважды, первый раз передаем функции создающие контейнеры, второй раз передаю компоненту которую необходимо обернуть контейнерами

export default compose(
    connect(mapStateToProps, { setUsersTC, getUsersStatusTC, setUsersStatusTC, setNewProfilePhotoTC, setNewUserInfoTC }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)
