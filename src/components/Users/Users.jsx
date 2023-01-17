import axios from "axios";
import React from "react";
import User from "./User/User";
import style from "./Users.module.css"





export default function Users(props) {
    const getUsers = () => {
        if (props.userInfo.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            });
        }
    }


    const UserItem = props.userInfo.map((item, index) => (<User
        key={index}
        id={item.id}
        follow={item.followed}
        name={item.name}
        // location={item.location}
        // status={item.status}
        followChange={props.followChange}
        photo={item.photos.small} />))

    return (
        <>
            <h3 className={style.title}>Users</h3>
            <div className={style.usersList}>
                <div className={style.userWrappwer}>
                    {UserItem}
                </div>
                <button onClick={getUsers} className={style.moreUsers}>Show More</button>
            </div>
        </>
    )
}
