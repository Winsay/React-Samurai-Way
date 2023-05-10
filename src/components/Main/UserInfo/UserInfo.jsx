import React from "react";
import style from './UserInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusHook from "./ProfileStatusHook";
import avatar from '../../../assets/img/avatar.png';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PreloaderSpinner from "../../common/preloader/PreloaderSpinner";

export default function UserInfo(props) {
    const [editMode, setEditMode] = useState(false)
    useEffect(() => {
        if (!props.profile) {
            setEditMode(false)
        } else if (props.profile.userId !== props.authProfileId) {
            setEditMode(false)
        }
    }, [props.profile, props.authProfileId])

    const onChangeProfilePhoto = (e) => {
        let photoFile = e.target.files[0];
        if (e.target.files.length > 0) {
            props.changeProfilePhoto(photoFile);
        }
    }

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
            <div className={style.infoLogo}>
                <img className={style.infoPhoto} src={!props.profile.photos.large ? avatar : props.profile.photos.large} alt="profile" />
                {props.authProfileId === props.profile.userId &&
                    <div className={style.addPhotoWrapp}>
                        <input onChange={onChangeProfilePhoto} className={style.addProfilePhoto} id='profilePhoto' type="file" />
                        <label htmlFor='profilePhoto'>
                            <span>Загрузить изображение</span>
                        </label>
                    </div>
                }
            </div>
            <div className={style.infoText}>
                <div className={style.profileNameStatus}>
                    <h3 className={style.infoName}>{props.profile.fullName}</h3>
                    <ProfileStatusHook authProfileId={props.authProfileId} profile={props.profile} status={props.status} onSetUsersStatus={props.onSetUsersStatus} />
                </div>
                {props.awaitResponseInfo
                    ?
                    <PreloaderSpinner height='22' />
                    :
                    <>
                        {editMode ?
                            <InfoForm {...props} setEditMode={setEditMode} changeUserInfo={props.changeUserInfo} />
                            :
                            <InfoComponent {...props} setEditMode={setEditMode} />
                        }
                    </>
                }

            </div>


        </>
    )
}


const InfoComponent = (props) => {
    let contacts = { ...props.profile.contacts };
    for (let contact in contacts) {
        if (contacts[contact]) {
            let res = contacts[contact].split('/');
            if (res.at(-1)) {
                contacts[contact] = res.at(-1)
            } else if (res.at(-2)) {
                contacts[contact] = res.at(-2)
            }
        }
    }

    return (
        <div className={style.profileInfo}>
            <h4 className={style.infoBirth}>Date of Birth: 31 august</h4>
            <h4 className={style.infoLoc}>City: Pavlograd</h4>
            <h4 className={style.infoEdu}>Education: DIIT</h4>
            <h4 className={style.infoAboutMe}>Обо мне: {props.profile.aboutMe ? props.profile.aboutMe : 'не указано'}</h4>
            <h4>{`Ищу работу: ${props.profile.lookingForAJob ? 'да' : 'нет'}`}</h4>
            <h4>{`Какую работу: ${!props.profile.lookingForAJobDescription ? 'не указано' : props.profile.lookingForAJobDescription}`}</h4>
            <h4 className={style.infoSite}>Web Site: {props.profile.contacts.website ? props.profile.contacts.website : 'не указано'}</h4>
            <h4>{`Instagram: ${!props.profile.contacts.instagram ? 'не указано' : contacts.instagram}`}</h4>
            <h4>{`GitHub: ${!props.profile.contacts.github ? 'не указано' : contacts.github}`}</h4>
            <h4>{`Twitter: ${!props.profile.contacts.twitter ? 'не указано' : contacts.twitter}`}</h4>

            {props.authProfileId === props.profile.userId ?
                <div className={style.btnWrapper}>
                    <button onClick={() => props.setEditMode(true)} className={style.userInfoChangeBtn}><p>CHANGE</p></button>
                </div>
                :
                ''
            }

        </div>
    )
}

const InfoForm = (props) => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'all',
        defaultValues: {
            aboutMe: props.profile.aboutMe,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            instagram: props.profile.contacts.instagram,
            website: props.profile.contacts.website,
            github: props.profile.contacts.github,
            twitter: props.profile.contacts.twitter
        }
    });
    const onSubmit = (data) => {
        let newData = { ...data, userId: props.profile.userId, fullName: props.profile.fullName }
        props.changeUserInfo(newData)
        props.setEditMode(false)
    }
    return (
        <form className={style.userInfoForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.formInput}>
                <label>Обо мне:</label>
                <input
                    {...register('aboutMe', {})}
                    autoComplete="off"
                />
            </div>
            <div className={style.formCheckBox}>
                <label>Ищу работу:</label>
                <input
                    {...register('lookingForAJob', {})}
                    type={"checkbox"}
                />
            </div>
            <div className={style.formInput}>
                <label>Какую работу:</label>
                <input
                    {...register('lookingForAJobDescription', {})}
                    autoComplete="off"
                />
            </div>
            <div className={style.formInput}>
                <label>Вебсайт:</label>
                <input
                    {...register('website', {})}
                    autoComplete="off"
                />
            </div>
            <div className={style.formInput}>
                <label>Instagram:</label>
                <input
                    {...register('instagram', {})}
                    autoComplete="off"
                />
            </div>
            <div className={style.formInput}>
                <label>GitHub:</label>
                <input
                    {...register('github', {})}
                    autoComplete="off"
                />
            </div>
            <div className={style.formInput}>
                <label>Twitter:</label>
                <input
                    {...register('twitter', {})}
                    autoComplete="off"
                />
            </div>
            <div className={style.formSubmit}>
                <input type="submit" value={'Save changes'} />
            </div>
        </form>
    )
}