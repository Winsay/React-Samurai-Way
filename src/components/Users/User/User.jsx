import React from "react";
import style from "./User.module.css"




export default function User(props) {
    const onChangeFollow = () => {
        props.followChange(props.id)
    }

    return (
        <div className={style.user}>
            <div className={style.userLeft}>
                <img src={props.photo ? props.photo : '/img/avatar.png'} alt="face" className={style.userPic} />
                <button onClick={onChangeFollow} className={props.follow ? style.userFollow : style.userUnfollow}>{props.follow ? 'Follow' : 'Unfollow'}</button>
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
