import { loginThunk } from "./reduseAuth"

const INITIALIZED = 'INITIALIZED';

let initialState = {
    isInitialized: false,
};

const resduseInitialzing = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED: {
            return {
                ...state,
                isInitialized: true
            }
        }
        default:
            return state;
    }
}

export const initializeAction = () => {
    return {
        type : INITIALIZED,
    }
};

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(loginThunk());
        promise.then(() => {
            dispatch(initializeAction())
        })
    }
}





export default resduseInitialzing ;