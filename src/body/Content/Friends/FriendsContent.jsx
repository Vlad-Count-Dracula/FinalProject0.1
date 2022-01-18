import React from "react";
import { NavLink } from "react-router-dom";
import s from "./FriendsContent.module.css";


const FriendsContent = (props) => {
  let countPages = Math.ceil(props.totalUserCount / props.pageSize);

  let pages = [];
  let i = 1
  for (i; i <= countPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => <button className={props.currentPage === p ? s.currentPage : null} onClick={() => props.pageChenges(p)} >{p}</button>)}
      </div>
      {
        props.friendsPage.map(info => <div key={info.id}>
          <div className={s.friendWrappper}>
            <div className={s.friendBox}>
              <div className={s.friendAva}>
                <NavLink to={'/profile/' + info.id}>
                  <div className={s.friendLogo}>
                  </div>
                  <div className={s.friendTitle}>
                    {info.name}
                  </div>
                </NavLink>
                <div className={s.friendFollow}>
                  {info.followed ? <button disabled={props.follwingProgres.some(id => id === info.id)} onClick={() => {
                    props.unfollowThunk(info.id)
                  }} >Unfollow</button> : <button disabled={props.follwingProgres.some(id => id === info.id)} onClick={() => {
                    props.followThunk(info.id)
                  }} >Follow</button>}
                </div>
              </div>
              <div className={s.friendInfoBox}>
                <div className={s.friendStatus}>

                </div>
                <div className={s.friendLocation}>
                  <div className={s.friendCountry}></div>
                  <div className={s.friendCity} ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </div>
  );
};


export default FriendsContent;