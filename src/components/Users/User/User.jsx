import React from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";




export default function User(props) {
    const onChangeFollow = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, { withCredentials: true }).then(response => {
            let followStatus = response.data;
            if (followStatus === false) {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, { withCredentials: true, headers: { "API-KEY": '5edbe232-6099-4ee4-9271-b8f81afb7d19' } }).then(response => {
                    if (response.data.resultCode === 0) {
                        props.followChanged(props.id, followStatus = true)
                    }
                })
            } else if (followStatus === true) {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, { withCredentials: true, headers: { "API-KEY": '5edbe232-6099-4ee4-9271-b8f81afb7d19' } }).then(response => {
                    if (response.data.resultCode === 0) {
                        props.followChanged(props.id, followStatus = false)
                    }
                })
            }
        });
        props.followChanged(props.id)
    }

    return (
        <div className={style.user}>
            <div className={style.userLeft}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photo ? props.photo : '/img/avatar.png'} alt="face" className={style.userPic} />
                </NavLink>
                <button onClick={onChangeFollow} className={props.follow ? style.userFollow : style.userUnfollow}>{props.follow ? 'Followed' : 'Unfollowed'}</button>
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
