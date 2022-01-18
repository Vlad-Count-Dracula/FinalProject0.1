import { followApi, unfollowApi, usersApi } from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_COUNT = 'TOTAL-COUNT';
const PRELOADER = 'PRELOADER';
const FOLLOWING_PROGRES = 'FOLLOWING-PROGRES';

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 30,
  currentPage: 1,
  preloader: false,
  follwingProgres: [],

};


const reduseFriendsPage = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: true }
          } else {
            return u;
          }
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: false }
          };
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage,
      }
    case TOTAL_COUNT:
      return {
        ...state, totalCount: action.totalCount,
      }
    case PRELOADER:
      return {
        ...state, preloader: action.boolean,
      }
    case FOLLOWING_PROGRES:
      return {
        ...state,
        follwingProgres: action.progres ?
          [...state.follwingProgres, action.userId] :
          state.follwingProgres.filter(id => id !== action.userId),
      }
    default:
      return state;
  };
};

export const actionCreatorFollow = (id) => {
  return {
    type: FOLLOW,
    id: id,
  }
};

export const actionCreatorUnfollow = (id) => {
  return {
    type: UNFOLLOW,
    id: id,
  }
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  }
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  }
};

export const setTotalUserCount = (totalCount) => {
  return {
    type: TOTAL_COUNT,
    totalCount: totalCount,
  }
};

export const setPreloader = (boolean) => {
  return {
    type: PRELOADER,
    boolean: boolean,
  }
};

export const disableButtonFollowing = (progres, userId) => {
  return {
    type: FOLLOWING_PROGRES,
    progres: progres,
    userId: userId,
  }
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setPreloader(true));
    usersApi(currentPage, pageSize).then(data => {
      dispatch(setPreloader(false));
      dispatch(setUsers(data.items));
    });
  }
};

export const setChengesPage = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setPreloader(true));
    dispatch(setCurrentPage(currentPage));
    usersApi(currentPage, pageSize).then(data => {
      dispatch(setPreloader(false));
      dispatch(setUsers(data.items));
    });
  }
};

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(disableButtonFollowing(true, userId));
    followApi(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(actionCreatorFollow(userId))
      }
      dispatch(disableButtonFollowing(false, userId));
    });
  }
};

export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(disableButtonFollowing(true, userId));
    unfollowApi(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(actionCreatorUnfollow(userId))
      }
      dispatch(disableButtonFollowing(false, userId));
    });
  }
};

export default reduseFriendsPage;