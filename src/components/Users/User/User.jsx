import React from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../../api/api";




export default function User(props) {

    const changeFollow = () => {
        props.onChangeFollow(props.id)
    }
    // const onChangeFollow = () => {
    //     usersAPI.followChange.followedCheck(props.id).then(response => {
    //         let followStatus = response;
    //         if (followStatus === false) {
    //             usersAPI.followChange.following(props.id).then(response => {
    //                 if (response.resultCode === 0) {
    //                     props.followChanged(props.id, followStatus = true)
    //                 }
    //             })
    //         } else if (followStatus === true) {
    //             usersAPI.followChange.unfollowing(props.id).then(response => {
    //                 if (response.resultCode === 0) {
    //                     props.followChanged(props.id, followStatus = false)
    //                 }
    //             })
    //         }
    //     })
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, { withCredentials: true }).then(response => {
    //         let followStatus = response.data;
    //         if (followStatus === false) {
    //             axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, { withCredentials: true, headers: { "API-KEY": '5edbe232-6099-4ee4-9271-b8f81afb7d19' } }).then(response => {
    //                 if (response.data.resultCode === 0) {
    //                     props.followChanged(props.id, followStatus = true)
    //                 }
    //             })
    //         } else if (followStatus === true) {
    //             axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, { withCredentials: true, headers: { "API-KEY": '5edbe232-6099-4ee4-9271-b8f81afb7d19' } }).then(response => {
    //                 if (response.data.resultCode === 0) {
    //                     props.followChanged(props.id, followStatus = false)
    //                 }
    //             })
    //         }
    //     });
    //     props.followChanged(props.id)
    // }

    return (
        <div className={style.user}>
            <div className={style.userLeft}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photo ? props.photo : 'img/avatar.png'} alt="face" className={style.userPic} />
                </NavLink>
                <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={changeFollow} className={props.follow ? style.userFollow : style.userUnfollow} >{props.followingInProgress.some(id => id === props.id) ? 'Wait....' : `${props.follow ? 'Followed' : 'Unfollowed'}`}</button>
            </div>
            <div className={style.userRight}>
                <div className={style.userInfoTop}>
                    <p className={style.name}>{props.name}</p>
                    <p className={style.location}>
                        Локация
                        {/* {props.location.city}<React.Fragment><br /></React.Fragment>{props.location.country} */}
                    </p>
                </div>
                <div className={style.userInfoBot}>
                    <p className={style.status}>
                        {/* {props.status} */}
                        Статус
                    </p>
                </div>
            </div>
        </div>
    )
}
