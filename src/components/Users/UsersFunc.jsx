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


    const goToThePage = () => {
        let page = null;
        if (inputValue.current.value > pagesCount) {
            page = pagesCount
        } else if (inputValue.current.value <= 0) {
            page = 1
        } else {
            page = inputValue.current.value
        }
        onChangePage(Number(page))
    }
    const prevPagesButton = () => {
        let page = null;
        if (curPage < 6) {
            page = curPage - 1
        } else {
            page = slicedPages[0] - 5
        }
        onChangePage(page)
    }

    let inputValue = React.createRef();
    // console.log(inputValue.current.value)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let slicedPages;
    let curPage = props.curentPage;
    slicedPages = pages.slice(curPage - 1, curPage + 4)
    let Prel = [...Array(4)]
    return (
        <>
            <h3 className={style.title}>Users</h3>
            <div className={style.pagesPaginator}>
                <div className={style.paginatorLeft}>
                    <button disabled={curPage === 1} onClick={prevPagesButton} className={style.prevPages}>Prev</button>
                    {slicedPages.map((item, index) => <span onClick={(e) => { onChangePage(item) }} key={index} className={props.curentPage === item ? style.selectedPage : ''}>{item}</span>)}
                    <button disabled={curPage + 5 > pagesCount} className={style.nextPages} onClick={(e) => { onChangePage(slicedPages[slicedPages.length - 1] + 1) }}>Next</button>
                </div>
                <div className={style.paginatorRight}>
                    <input ref={inputValue} type="number" placeholder="page..." />
                    <button onClick={goToThePage}>Go</button>
                    <span>maxPage = {pagesCount}</span>
                </div>
            </div>
            {props.isFetching
                ?
                Prel.map((item, index) => <Preloader key={index} />)
                :
                <>
                    <div className={style.usersList}>
                        <div className={style.userWrappwer}>
                            {UserItem}
                        </div>
                        <button onClick={(e) => { onShowMore(pagesCount) }} className={style.moreUsers}>Show More</button>
                    </div>
                </>
            }
        </>
    )
}