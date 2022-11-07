import React from "react";
import style from './Main.module.css'


export default function Profile() {
    return (
        <main className={style.main}>
            <img className={style.anime} src="img/anime.jpg" alt="anime" />
            <div className={style.mainInfo}>
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
            </div>
            <div className={style.mainPost}>
                <h2 className={style.postTitle}>My post</h2>
                <input type="text" placeholder="your news..." className={style.postInp} />
                <button className={style.postSend}>Send</button>
                <div className={style.posts}>
                    <img src="img/durov.jpg" alt="prof" className={style.profilePic} />
                    <p className={style.postsText}>Hey, why nobody loves me?</p>
                </div>
                <div className={style.posts}>
                    <img src="img/durov.jpg" alt="prof" className={style.profilePic} />
                    <p className={style.postsText}>it's also new program! Hey!</p>
                </div>
            </div>
        </main>
    )
}