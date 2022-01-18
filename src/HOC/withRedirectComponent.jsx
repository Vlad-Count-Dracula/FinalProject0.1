import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
    }
}

export const withRedirectComponent = (Component) => {
    let redirectComponent = (props) => {
        if (!props.isLogin) return <Redirect to='/login' />
        return (
            <Component {...props} />
        )
    };
    redirectComponent = connect(mapStateToProps)(redirectComponent);
    return redirectComponent;

};

