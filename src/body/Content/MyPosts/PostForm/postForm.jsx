import React from "react";
import { Field } from "redux-form";
import { maxLengthCreator, requirement } from "../../../../Common/Validator/Validator";
import { TextArea } from "../../../../Common/Validator/ValidatorComponent";

const maxLength = maxLengthCreator(10);


const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Add your post' validate={[requirement, maxLength]} component={TextArea} name='postForm' />
                <button>Add post</button>
            </div>
        </form>
    )
};


export default PostForm;