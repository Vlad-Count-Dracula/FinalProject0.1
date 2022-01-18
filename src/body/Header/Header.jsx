import React from "react";
import Logo from './img/Logo.png'
import s from'./Header.module.css';
import { NavLink, } from "react-router-dom";



const Header = (props) => {

  const logOutAction = () => {
    props.deleteFormLoginThunk();
  };

    return (
      <header className={s.header}>
        <img src={Logo} alt=''></img>
        <div>
        {props.isLogin ?<div><h2>{props.login}</h2><button onClick={logOutAction}>Log Out</button></div>  : <NavLink className={s.login} to='/login'>Login</NavLink>}
        </div>
      </header>
    );
  };

  
  export default Header;