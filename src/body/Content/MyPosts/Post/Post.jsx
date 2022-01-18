import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import s from './Post.module.css';
import Ava from './img/Ava.jpeg';


const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.post__ava}>
                <img src={Ava} alt=''></img>
            </div>
            <div className={s.post__text}>
                {props.message}
            </div>
            <div className={s.post__likes}>
                <div className={s.post__like}>Like <FontAwesomeIcon icon={faCoffee} />{props.likeCount}</div> 
            </div>
        </div>
    )
};




export default Post;