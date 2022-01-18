import { connect } from "react-redux";
import { compose } from "redux";
import { withRedirectComponent } from "../../../HOC/withRedirectComponent";
import { actionCreatorAddMessage } from "../../../redax/reduseMessagePage";
// import { actionCreatorAddMessage, actionCreatorCarrentText } from "../../../redax/State";
import Messages from "./Messages";


let mapStateToProps = (state) => {
  return {
    dataMessageUser: state.messagePage.dataMessageUser,
    dataMessageText: state.messagePage.dataMessageText,
    isLogin: state.auth.isLogin,
  }
};


export default compose(
  connect(mapStateToProps, {actionCreatorAddMessage}),
  withRedirectComponent,
)(Messages);