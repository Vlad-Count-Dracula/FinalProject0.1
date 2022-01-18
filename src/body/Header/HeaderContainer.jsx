import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { deleteFormLoginThunk, setDataLogin } from "../../redax/reduseAuth";
import { compose } from "redux";



class HeaderContainer extends React.Component {

    render() {
        return (
            <>
                <Header {...this.props} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
    login: state.auth.login,
    email: state.auth.email,
})

export default compose(
    connect(mapStateToProps, { setDataLogin, deleteFormLoginThunk }),
    )
    (HeaderContainer);