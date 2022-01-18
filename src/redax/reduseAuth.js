import { deleteFormLoginData, login, sendFormLoginData } from "../API/api";
import { stopSubmit } from 'redux-form';
import { withRedirectComponent } from "../HOC/withRedirectComponent";

const SET_AUTH_DATA = 'SET-AUTH-DATA';
const DELETE_LOGIN_DATA = 'DELETE-LOGIN-DATA';

let initialState = {
    email: null,
    id: null,
    login: null,
    isLogin: false,
    password: null,
    rememberMe: false,
}

const reduseAuthData = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
                isLogin: true,
            }
        }
        case DELETE_LOGIN_DATA: {
            return {
                ...state,
                ...action.data,
                isLogin: false,
            }
        }
        default:
            return state;
    };
}

export const setDataLogin = (email, id, login) => {
    return {
        type: SET_AUTH_DATA,
        data: { email, id, login, }
    }
};

export const deleteLoginData = (email, id, login) => {
    return {
        type: DELETE_LOGIN_DATA,
        data: { email, id, login, }
    }
};

export const loginThunk = () => (dispatch) => login().then(response => {
    if (response.data.resultCode === 0) {
        let { email, id, login } = response.data.data;
        dispatch(setDataLogin(email, id, login));
    }
});


export const setFormLoginThunk = (login, password, rememberMe) => {
    return (dispatch) => {
        sendFormLoginData(login, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(loginThunk());
            } else {
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error';
                dispatch(stopSubmit('login', { _error: messages }));
            }
        })
    }
};

export const deleteFormLoginThunk = (props) => {
    return (dispatch) => {
        deleteFormLoginData().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(deleteLoginData());
                if (!initialState.isLogin) {
                    dispatch(withRedirectComponent())
                }
            }
        })
    }
}



export default reduseAuthData;