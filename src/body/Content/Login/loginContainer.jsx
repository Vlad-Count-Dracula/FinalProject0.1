import { connect } from "react-redux";
import { setFormLoginThunk } from "../../../redax/reduseAuth";
import Login from "./login";


let stateToProps = (state) => {
    return {
        email: state.auth.email,
        isLogin: state.auth.isLogin,
    }
}

const LoginContainer = connect(stateToProps, {setFormLoginThunk})(Login);


export default LoginContainer;