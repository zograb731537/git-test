const ADD_NAME = "ADD-NAME";
const UPDATE_NEW_NAME = "UPDATE-NEW-NAME";

let initialState = {
      friends : [
        {name:"Edo"},
        {name:"Vika"},
        {name:"Tanya"},
      ],
        addName : "",
    }

const friendsReduser = (state = initialState, action) => {   
     switch (action.type) {
       case ADD_NAME :
        let names = {
          name : state.addName,
        }
        state.friends.push(names);
        state.addName = "";
        return state;
        case UPDATE_NEW_NAME :
          state.addName = action.newName;
          return state;
          default:
            return state;
     }
    };
    

export const AddNameActionCreator = () => {
  return {
    type : ADD_NAME
  }
};

export const updateNewNameActionCreator = (frendsName) => {
  return {
    type :UPDATE_NEW_NAME , newName : frendsName
  }
};
export default friendsReduser;