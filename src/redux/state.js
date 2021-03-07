const ADD_POST = "ADD-POST";

const APDATE_NEW_TEXT = "APDATE-NEW-TEXT";

const ADD_MESSAGE = "ADD-MESSAGE";

const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: " Hello , how are you!", count: 15 },
        { id: 2, message: " It's my first post!", count: 18 },
        { id: 3, message: " I want to be a programmer!", count: 20 },
        { id: 4, message: "I feel I can do it!", count: 10 },
      ],
      newPostText: "It-kamasutra",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Eduard" },
        { id: 2, name: "Armen" },
        { id: 3, name: "Vardan" },
        { id: 4, name: "Karen" },
        { id: 5, name: "Sargis" },
      ],

      messages: [
        { id: 1, message: "Hello!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "What is your name?" },
      ],
      newPostMessage: "",
    },
    singersPage: {
      singers: [
        { id: "1", singer: "Michael Jackson" },
        { id: "2", singer: "Paul McCartney" },
        { id: "3", singer: "Stevie Wonder" },
      ],
      songs: [
        {
          id: "1",
          song: (
            <a href="https://youtu.be/s3wNuru4U0I?t=2" target="_blank">
              We are the world
            </a>
          ),
        },
        {
          id: "2",
          song: (
            <a href="https://youtu.be/6d5ST3tbPIU" target="_blank">
              Let it be
            </a>
          ),
        },
        {
          id: "3",
          song: (
            <a href="https://youtu.be/1bGOgY1CmiU" target="_blank">
              I just called to say I love you
            </a>
          ),
        },
      ],
      newSingerName: "",
    },
  },

  _callSubscriber() {
    console.log("state");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        count: 12,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = " ";
      this._callSubscriber(this._state);
    } else if (action.type === "APDATE-NEW-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 6,
        name: this._state.dialogsPage.newPostMessage,
      };
      this._state.dialogsPage.dialogs.push(newMessage);
      this._state.dialogsPage.newPostMessage = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE") {
      this._state.dialogsPage.newPostMessage = action.newMessage;
      this._callSubscriber(this._state);
    }

    if (action.type === "ADD-SINGER") {
      let newSinger = {
        id: 4,
        singer: this._state.singersPage.newSingerName,
      };

      this._state.singersPage.singers.push(newSinger);
      this._state.singersPage.newSingerName = "";
      this._callSubscriber(this._state);
    } else if (action.type === "APDATE-NEW-SINGER-NAME") {
      this._state.singersPage.newSingerName = action.newName;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
      type : ADD_POST
  }
};

export const updateNewTextActionCreator = (text) => {
  return {
      type : APDATE_NEW_TEXT, newText : text
  }
};


export const AddMessageActionCreator = () => {
  return {
     type : ADD_MESSAGE
  }
};

export const updateNewMessageActionCreator = (text) => {
  return {
     type : UPDATE_NEW_MESSAGE, newMessage : text 
  }
};



export default store;
window.store = store;
