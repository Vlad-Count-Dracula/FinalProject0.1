import React from "react";
import { Field } from "redux-form";


const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Write your message'} component={'textarea'} name={'messageForm'} />
      </div>
      <div>
        <button>Add Message</button>
      </div>
    </form>
    )
};


export default MessageForm ;