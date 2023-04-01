import React from "react";
import User from "./User/User";
import style from "./Users.module.css"
import Preloader from "../common/preloader/Preloader";



export default function UsersFunc({ props, onChangePage, onShowMore, onChangeFollow }) {
    const UserItem = props.usersInfo.map((item, index) => (<User
        key={index}
        id={item.id}
        follow={item.followed}
        name={item.name}
        // location={item.location}
        // status={item.status}
        followChanged={props.followChanged}
        onChangeFollow={onChangeFollow}
        followingInProgress={props.followingInProgress}
        photo={item.photos.small} />))

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let slicedPages;
    let curPage = props.curentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5)
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2)
    }

    let Prel = [...Array(4)]
    // let curP = this.props.curentPage;
    // let curPF = ((curP - 3) < 0) ? 0 : curP - 3;
    // let curPL = curP + 3;
    // let slicedPages = pages.slice(curPF, curPL)

    return (
        <>
            <h3 className={style.title}>Users</h3>
            {slicedPages.map((item, index) => <span onClick={(e) => { onChangePage(item) }} key={index} className={props.curentPage === item ? style.selectedPage : ''}>{item}</span>)}
            {props.isFetching
                ?
                Prel.map((item, index) => <Preloader key={index} />)
                :
                <>
                    <div className={style.usersList}>
                        <div className={style.userWrappwer}>
                            {UserItem}
                        </div>
                        <button onClick={(e) => { onShowMore() }} className={style.moreUsers}>Show More</button>
                    </div>
                </>
            }
        </>
    )
}