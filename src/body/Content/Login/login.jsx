import React from "react";
import { Redirect } from "react-router-dom";
import { reduxForm } from "redux-form";
import LoginForm from "./FormLogin/formLogin";

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.setFormLoginThunk(formData.login, formData.password, formData.rememberMy);
    };

    return (
        <>
            {props.isLogin ? <Redirect to='/profile'/> : null }
            <LoginReduxForm onSubmit={onSubmit} {...props}/>
        </>
    );
};


export default Login;