const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
  dataMessageUser: [
    { name: 'Honey', id: '1' },
    { name: 'Mom', id: '2' },
    { name: 'Sister', id: '3' },
    { name: 'Andry', id: '4' },
    { name: 'Dimon', id: '5' },
    { name: 'My soul', id: '6' },
  ],

  dataMessageText: [
    { text: 'For now your situation really complicated :)', id: '1' },
    { text: 'And only you have power to change everything !', id: '2' },
    { text: 'Use your power more then 100% !', id: '3' },
  ],

};


const reduseMessagePage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        dataMessageText: [...state.dataMessageText, {text: action.message.messageForm , id: '4',}],
      };
    default:
      return state;
  };
};


export const actionCreatorAddMessage = (messageForm) => {
  return {
    type: ADD_MESSAGE,
    message: messageForm,
  }
};

export default reduseMessagePage;