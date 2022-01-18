import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Profile from "./Profile";
import { setUserProfileThunk, getStatusThunk, updateStatusThunk } from "../../../redax/reduseProfilePage";
import { withRedirectComponent } from "../../../HOC/withRedirectComponent";
import { compose } from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 20225;
        };
        this.props.setUserProfileThunk(userID);
        this.props.getStatusThunk(userID);
    };


    render() {
        return <>
            <Profile {...this.props} />
        </>
    };
}
let statetoProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
};


export default compose(
    connect(statetoProps, { setUserProfileThunk, getStatusThunk, updateStatusThunk }),
    withRedirectComponent,
    withRouter,
)(ProfileContainer);