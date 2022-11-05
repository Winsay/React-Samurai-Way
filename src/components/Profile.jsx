import React from "react";


export default function Profile() {
    return (
        <main className="main">
            <img className='anime' src="img/anime.jpg" alt="anime" />
            <div className="mainInfo">
                <div className="infoLogo">
                    <img src="img/durov.jpg" alt="profile" />
                </div>
                <div className="infoText">
                    <h3 className="infoName">Alex K</h3>
                    <h4 className="infoBirth">Date of Birth: 31 august</h4>
                    <h4 className='infoLoc'>City: Pavlograd</h4>
                    <h4 className='infoEdu'>Education: DIIT</h4>
                    <h4 className='infoSite'>Web Site: wikipedia.org</h4>
                </div>
            </div>
            <div className="mainPost">
                <h2 className="postTitle">My post</h2>
                <input type="text" placeholder="your news..." className="postInp" />
                <button className="postSend">Send</button>
                <div className="posts">
                    <img src="img/durov.jpg" alt="prof" className="profilePic" />
                    <p className="postsText">Hey, why nobody loves me?</p>
                </div>
                <div className="posts">
                    <img src="img/durov.jpg" alt="prof" className="profilePic" />
                    <p className="postsText">it's also new program! Hey!</p>
                </div>
            </div>
        </main>
    )
}