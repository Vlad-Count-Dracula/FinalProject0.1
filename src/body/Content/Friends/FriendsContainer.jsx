import { connect } from "react-redux";
import { getUsers, setChengesPage, followThunk, unfollowThunk, } from "../../../redax/reduseFriendsPage";
import FriendsContent from "./FriendsContent";
import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import { Redirect } from "react-router";
import { withRedirectComponent } from "../../../HOC/withRedirectComponent";
import { compose } from "redux";
import { getFriendsPage } from "../../../redax/friendsSelector";





class FriendsAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };


    pageChenges = (currentPage) => {
        this.props.setChengesPage(currentPage, this.props.pageSize);
    }
    render() {
        if (this.props.isLogin === false) return <Redirect to='/login' />
        return <>
            {this.props.preLoader ? <Preloader /> : null}
             <FriendsContent
                pageChenges={this.pageChenges}
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                friendsPage={this.props.friendsPage}
                follwingProgres={this.props.follwingProgres}
                disableButtonFollowing={this.props.disableButtonFollowing}
                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}

            /> 
        </>
    }
}




let stateToProps = (state) => {
    return {
        friendsPage: getFriendsPage(state),
        pageSize: state.friendsPage.pageSize,
        totalUserCount: state.friendsPage.totalCount,
        currentPage: state.friendsPage.currentPage,
        preLoader: state.friendsPage.preloader,
        follwingProgres: state.friendsPage.follwingProgres,
        isLogin: state.auth.isLogin,
    }
};

let actionToProps = (dispatch) => {
    return {

        getUsers: (currentPage, pageSize) => {
            dispatch(getUsers(currentPage, pageSize));
        },
        setChengesPage: (currentPage, pageSize) => {
            dispatch(setChengesPage(currentPage, pageSize));
        },
        followThunk: (userId) => {
            dispatch(followThunk(userId));
        },
        unfollowThunk: (userId) => {
            dispatch(unfollowThunk(userId));
        },

    }
};


export default compose(
    connect(stateToProps, actionToProps),
    withRedirectComponent,
)(FriendsAPI);