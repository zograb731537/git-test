const ADD_DIALOG = "ADD-DIALOG";
const APDATE_NEW_POST_NAME = "APDATE-NEW-POST-NAME" ;

let initialState = {
  dialogs1: [
      {id: 1,name: "Eduard"},
      {id: 2,name: "Armen"},
      {id: 3,name: "Vardan"},
      {id: 4,name: "Karen"},
      {id: 5,name: "Sargis"},
    ],
    messages1: [
      {id: 1,message: "Hello!"},
      {id: 2,message: "How are you?"},
      {id: 3,message: "What is your name?"},
      {id: 4,message: "How old are you?"},
      {id: 5,message: "Where are you born?"},
    ],
    dialogs2: [
      {id: 1,name: "Andrew"},
      {id: 2,name: "Vlad"},
      {id: 3,name: "Michail"},
      {id: 4,name: "Viktor"},
      {id: 5,name: "Pavel"},
    ],
    messages2: [
      {id: 1,message: "Hi!"},
      {id: 2,message: "Thanks well."},
      {id: 3,message: "Michail."},
      {id: 4,message: "I am 35."},
      {id: 5,message: "I was born in Moskow."},
    ],
    newPostName :"",
  }

const dialogsReduser = (state = initialState ,action) => {
   
  switch (action.type) {
    case ADD_DIALOG :
      let newName = {
        id: 6,
        name: state.newPostName,
      };
      state.dialogs1.push(newName);
      state.newPostName = "";
      return state;
      case APDATE_NEW_POST_NAME :
        state.newPostName = action.newName;
        return state;
        default:
          return state;
  }
}
export const addDialogActionCreator = () => {
  return {
     type : ADD_DIALOG
  }
};

export const updateNewPostNameActionCreator = (text) => {
  return {
     type : APDATE_NEW_POST_NAME , newName : text
  }
};


export default dialogsReduser;