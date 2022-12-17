import React from "react";
import User from "./User/User";
import style from "./Users.module.css"





export default function Users(props) {

    if (props.userInfo.length === 0) {
        props.setUsers([
            { id: 1, imgURL: 'img/durov.jpg', isFollow: true, fullName: 'Alex', status: 'i\'m alive', location: { city: 'Dnepr,', country: 'Ukraine' } },
            { id: 2, imgURL: 'img/Poliak.jpg', isFollow: false, fullName: 'Kshishtof', status: 'Tolko edno w glowe mam', location: { city: 'Wroclaw,', country: 'Poland' } },
            { id: 3, imgURL: 'img/Mannerheim.png', isFollow: true, fullName: 'Mannergeim', status: 'Coctail for Molotov', location: { city: 'Helsinki,', country: 'Finland' } },
            { id: 4, imgURL: 'img/Obama.jpg', isFollow: false, fullName: 'Johny', status: 'Obama is my presedent', location: { city: 'Los-Angeles,', country: 'USA' } }

        ]
        )
    }

    const UserItem = props.userInfo.map((item, index) => (<User
        key={index}
        id={item.id}
        follow={item.isFollow}
        name={item.fullName}
        location={item.location}
        status={item.status}
        followChange={props.followChange}
        imgURL={item.imgURL} />))

    return (
        <>
            <h3 className={style.title}>Users</h3>
            <div className={style.usersList}>
                <div className={style.userWrappwer}>
                    {UserItem}
                </div>
                <button className={style.moreUsers}>Show More</button>
            </div>
        </>
    )
}
