import React from "react";
import style from './UserInfo.module.css'



export default function UserInfo() {
    return (
        <>
            <div className={style.infoLogo}>
                <img src="img/durov.jpg" alt="profile" />
            </div>
            <div className={style.infoText}>
                <h3 className={style.infoName}>Alex K</h3>
                <h4 className={style.infoBirth}>Date of Birth: 31 august</h4>
                <h4 className={style.infoLoc}>City: Pavlograd</h4>
                <h4 className={style.infoEdu}>Education: DIIT</h4>
                <h4 className={style.infoSite}>Web Site: wikipedia.org</h4>
            </div>
        </>
    )
}