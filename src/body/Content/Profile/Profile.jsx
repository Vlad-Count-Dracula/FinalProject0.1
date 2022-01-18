import React from "react";
import s from './Profile.module.css';
import ProfileStatus from "./ProfileStatus";


const Profile = (props) => {
    return (
        <div className={s.Profile}>
          <div className={s.mainPhoto}>
          </div>
          <div>{ props.profile ? props.profile.fullName : 'Vasya'}</div>
          <div><ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/></div>
        </div>
    )
}

export default Profile ;