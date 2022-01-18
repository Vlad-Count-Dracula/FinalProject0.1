import React from "react";
import { Redirect } from "react-router";
import { reduxForm } from "redux-form";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PostForm from "./PostForm/postForm";



const ReduxPostForm = reduxForm({form: 'posts'})(PostForm);

const MyPosts = (props) => {

  let mapPostDataMessage = props.postDataMessage.map(post => <Post message={post.message} likeCount={post.likeCount} key={post.id} />);


  let addPost = (postText) => {
    props.actionCreatorAddPost(postText);
  }


  if (props.isLogin === false) return <Redirect to='/login' />;

  return (
    <div className={s.myPosts}>
      <div>
        My Post
        <ReduxPostForm onSubmit={addPost}/>
        {mapPostDataMessage}
      </div>
    </div>
  )
}

export default MyPosts;