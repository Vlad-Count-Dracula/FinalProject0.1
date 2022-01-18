import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import s from './SideBar.module.css';



const SideBar = (props) => {

  let mapSideBarLinks = props.sideBarLinks.map( link => <NavLink to={link.link} activeClassName={s.activeLink} key={link.id} > {link.title} </NavLink> );

  let mapFriends = props.dataFriends.map( name => <Friends name={name.name} key={name.id} /> )

    return (
      <nav className={s.nav}>

        <div className={s.nav__link}>
          {mapSideBarLinks}
        </div>

        <div className={s.title}><NavLink to='/friends' className={s.titleA} >Friends</NavLink></div>
        
        <div className={s.friends}>
          {mapFriends}
        </div>

      </nav>
    )
};

export default SideBar;