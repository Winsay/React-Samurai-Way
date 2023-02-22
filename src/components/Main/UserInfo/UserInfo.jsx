import React from "react";
import style from './UserInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";



export default function UserInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
            <div className={style.infoLogo}>
                <img className={style.infoPhoto} src={!props.profile.photos.large ? '/img/avatar.png' : props.profile.photos.large} alt="profile" />
            </div>
            <div className={style.infoText}>
                <div className={style.profileNameStatus}>
                    <h3 className={style.infoName}>{props.profile.fullName}</h3>
                    <ProfileStatus status={props.status} onSetUsersStatus={props.onSetUsersStatus} />
                </div>
                <div className={style.profileInfo}>
                    <h4 className={style.infoBirth}>Date of Birth: 31 august</h4>
                    <h4 className={style.infoLoc}>City: Pavlograd</h4>
                    <h4 className={style.infoEdu}>Education: DIIT</h4>
                    <h4 className={style.infoSite}>Web Site: wikipedia.org</h4>
                    <h4 className={style.infoAboutMe}>Обо мне: {props.profile.aboutMe ? props.profile.aboutMe : 'не указано'}</h4>
                    <h4>{`Работаю: ${props.profile.lookingForAJob ? 'да' : 'нет'}`}</h4>
                    <h4>{`Ищу работу: ${!props.profile.lookingForAJobDescription ? 'не указано' : props.profile.lookingForAJobDescription}`}</h4>
                    <h4>{`Instagram: ${!props.profile.contacts.instagram ? 'не указано' : props.profile.contacts.instagram}`}</h4>
                    <h4>{`GitHub: ${!props.profile.contacts.github ? 'не указано' : props.profile.contacts.github}`}</h4>
                    <h4>{`Twitter: ${!props.profile.contacts.twitter ? 'не указано' : props.profile.contacts.twitter}`}</h4>
                </div>
            </div>
        </>
    )
}