import { getStatusApi, setUserProfileApi, updateStatusApi } from "../API/api";

const ADD_POST = 'ADD-POST';
const CARRENT_VALUE = 'CARRENT-VALUE';
const PROFILE_USER = 'PROFILE-USER';
const GET_STATUS = 'GET-STATUS';

let initialState = {
  postDataMessage: [
    { message: 'I think your falls one time will make you possible to fly so far, I belive in you my friend !', likeCount: '23', id: '1', },
    { message: 'This project your first step for greatnes future ! One time you`ll become Hokage !', likeCount: '8', id: '2', },
  ],

  newPostText: '...',
  profile: null,
  status: '',
};


const reduseProfilePage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postDataMessage: [...state.postDataMessage, {message : action.newPost , likeCount: '0',}],
      };
    case CARRENT_VALUE:
      return {
        ...state,
        newPostText: action.carrentMessage
      };
    case PROFILE_USER:
      return {
        ...state, profile: action.profile,
      };
    case GET_STATUS:
      return {
        ...state, status: action.status,
      }
    default:
      return state;
  };
};

export const actionCreatorAddPost = (postText) => {
  return {
    type: ADD_POST,
    newPost : postText.postForm,
  }
};

export const actionCreatorCarrentMessage = (text) => {
  return {
    type: CARRENT_VALUE,
    carrentMessage: text,
  }
};

export const setUserProfile = (profile) => {
  return {
    type: PROFILE_USER,
    profile: profile,
  }
};

export const setUserProfileThunk = (userID) => {
  return (dispatch) => {
    setUserProfileApi(userID).then(response => {
      dispatch(setUserProfile(response.data));
    });
  }
};

export const setStatus = (status) => {
  return {
    type: GET_STATUS,
    status: status,
  }
};

export const getStatusThunk = (userID) => {
  return (dispatch) => {
    getStatusApi(userID).then(response => {
      dispatch(setStatus(response.data))
    })
  }
};

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    updateStatusApi(status).then(response => {
      if (response.data.resulteCode === 0) {
        dispatch(setStatus(response.data))
      }
    })
  }
};

export default reduseProfilePage;