const ADD_DIALOG = "ADD-DIALOG";

const APDATE_NEW_POST_NAME = "APDATE-NEW-POST-NAME" ;

export const dialogsReduser = (state,action) => {
   
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