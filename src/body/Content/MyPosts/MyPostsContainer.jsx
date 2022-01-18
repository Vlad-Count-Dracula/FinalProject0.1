import { connect } from "react-redux";
import { compose } from "redux";
import { withRedirectComponent } from "../../../HOC/withRedirectComponent";
import { actionCreatorAddPost } from "../../../redax/reduseProfilePage";
import MyPosts from "./MyPosts";



let mapStateToProps = (state) => {
  return {
    postDataMessage : state.profilePage.postDataMessage,
  }
}


export default compose(
  connect(mapStateToProps, {actionCreatorAddPost}),
  withRedirectComponent,
)(MyPosts);