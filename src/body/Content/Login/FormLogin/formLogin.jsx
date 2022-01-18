import React from "react";
import { Field } from "redux-form";
import { maxLengthCreator, requirement } from "../../../../Common/Validator/Validator";
import { Input } from "../../../../Common/Validator/ValidatorComponent";
import s from './formLogin.module.css';

let maxLength = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.formContainer}>
            {props.isLogin ? props.email : <h1>Login</h1>}
                <div className={s.login}>
                    <Field placeholder={'Your login'} validate={[requirement, maxLength]} component={Input} name={'login'} />
                </div>
                <div className={s.password}>
                    <Field placeholder={'Your password'} validate={[requirement, maxLength]} component={Input} type={'password'} name={'password'} />
                </div>
                <div className={s.rememberMe}>
                    <Field component={"input"} validate={[requirement, maxLength]} type={'checkbox'} name={'rememberMy'} /> <p className={s.textRemember} >Remember me ?</p>
                </div>
                <div className={s.submit}>
                    <button>Submit</button>
                </div>
                <div>
                    <h3>{props.error}</h3>
                </div>
            </div>
        </form>
    );
};


export default LoginForm;