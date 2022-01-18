import React from "react";
import s from './Content.module.css';
import { BrowserRouter, Route } from "react-router-dom";
import News from "./News/News";
import Settings from "./Settings/Settings";
import Music from "./Music/Music";
import MessagesContainer from "./Messages/MessagesContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import SideBarContainer from "./SideBar/SideBarContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import LoginContainer from "./Login/loginContainer";



const Content = () => {
  return (
    <BrowserRouter>
      <SideBarContainer />
      <div className={s.content}>
        <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
        <Route path='/profile/' render={() => <MyPostsContainer />} />
        <Route path='/friends' render={() => <FriendsContainer />} />
        <Route path='/messages' render={() => <MessagesContainer />} />
        <Route path='/news' render={() => <Music />} />
        <Route path='/music' render={() => <News />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/login' render={() => <LoginContainer />} />
      </div>
    </BrowserRouter>
  )
};

export default Content;