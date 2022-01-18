import { connect } from "react-redux";
import SideBar from "./SideBar";



let mapStateToProps = (state) => {
  return {
    sideBarLinks : state.sideBarPage.sideBarLinks,
    dataFriends : state.sideBarPage.dataFriends,
  }
}

const SideBarContainer = connect(mapStateToProps)(SideBar);



export default SideBarContainer;