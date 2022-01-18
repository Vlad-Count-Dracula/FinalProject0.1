import React from "react";
import { Redirect } from "react-router";
import { reduxForm } from "redux-form";
import MessageUser from "./ConstMessageUser/ConstMessageUser";
import MessageUserText from "./ConstUserText/ConstUserText";
import MessageForm from "./MessageForm/messageForm";
import s from './Messages.module.css';


const MessageReduxForm = reduxForm({ form: 'message' })(MessageForm);

const Messages = (props) => {

  let mapMessageUser = props.dataMessageUser.map(user => <MessageUser name={user.name} id={user.id} key={user.id} />);

  let mapMessageText = props.dataMessageText.map(text => <MessageUserText text={text.text} key={text.id} />);



  let sendPostText = (messageForm) => {
    props.actionCreatorAddMessage(messageForm)
  };


  if (props.isLogin === false) return <Redirect to='/login' />

  return (
    <div className={s.messages}>
      <div className={s.messages__users}>
        {mapMessageUser}
      </div>
      <div className={s.messages__texta}>
        <div className={s.messages__wrapper}>
          <div className={s.message__wrapper}>
            {mapMessageText}
          </div>
          <div className={s.textareaWrapper}>
            <MessageReduxForm onSubmit={sendPostText} />
          </div>
        </div>
      </div>
    </div>
  )
};



export default Messages;