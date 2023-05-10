import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css';
import logo from '../../assets/img/logo.png';
import avatar from '../../assets/img/avatar.png'


export default function Header(props) {

    const onLogout = () => {
        props.makeLogout();
    }

    // if (!props.authProfile) {
    //     return (
    //         <header className={style.header}>
    //             <NavLink to={'/profile'}>
    //                 <img src="https://upload.wikimedia.org/wikipedia/uk/thumb/c/c4/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg/2048px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg.png" alt="" />
    //             </NavLink>
    //         </header>
    //     )
    // }
    return (
        <header className={style.header}>
            <NavLink to={'/profile'}>
                <img className={style.headerLogo} src={logo} alt="Logo" />
            </NavLink>
            <div className={style.loginBlock}>
                {props.isAuth ?
                    <>
                        <NavLink className={style.UserLogined} to={`/profile/${props.authProfile.userId}`}>
                            <img src={!props.authProfile.photos.small ? avatar : props.authProfile.photos.small} alt="User" className="userImg" />
                            {props.login}
                        </NavLink>
                        {/* <NavLink to={'/login'}> */}
                        <button onClick={onLogout} className={style.logoutBtn}>LogOut</button>
                        {/* </NavLink> */}
                    </>
                    :
                    <NavLink className={style.loginItem} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}