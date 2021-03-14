const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
      {id: 1,message: " Hello , how are you!",count:15},
      {id: 2,message: " It's my first post!",count:18},
      {id: 3,message: " I want to be a programmer!",count:20},
      {id: 4,message: "I feel I can do it!",count:10},
    ],
    newPostText : "",
}
const profileReduser = (state = initialState,action) => {
  switch (action.type) {
    case ADD_POST :
      let newPost = {
        id: 5,
        message: state.newPostText,
        count: 3
      };
      state.posts.push(newPost);
        state.newPostText = "";
        return state;
        case UPDATE_NEW_POST_TEXT :
          state.newPostText = action.newText;
          return state;
          
          default:
          return state;
  }
}
export const  addPostActionCreator = () => {
  return {
      type : ADD_POST
  }

};

export const updateNewPostTextActionCreator = (text) => {
  return {
      type : UPDATE_NEW_POST_TEXT , newText : text
  }

};

export default profileReduser;