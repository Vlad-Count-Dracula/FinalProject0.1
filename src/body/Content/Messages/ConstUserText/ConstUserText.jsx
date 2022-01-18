import React from "react";
import s from './ConstUserText.module.css';

const MessageUserText = (props) => {
    return (
                <div className={s.messages__text} >
                  {props.text}
                </div>
    );
  };

  export default MessageUserText ;