import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reduseAuthData from "./reduseAuth";
import reduseFriendsPage from "./reduseFriendsPage";
import reduseMessagePage from "./reduseMessagePage";
import reduseProfilePage from "./reduseProfilePage";
import reduseSideBarPage from "./reduseSideBarPage";
import {reducer as formReduser} from 'redux-form';
import resduseInitialzing from "./reduseApp";

let redusers = combineReducers({
    sideBarPage : reduseSideBarPage,
    profilePage : reduseProfilePage,
    messagePage : reduseMessagePage,
    friendsPage : reduseFriendsPage,
    auth : reduseAuthData,
    form : formReduser,
    app: resduseInitialzing,
});

let store = createStore(redusers, applyMiddleware(thunk)); 



export default store ;