import { rerenderEntireTree } from "../render";



let state = {
  profilePage : {
    posts: [
      {id: 1,message: " Hello , how are you!",count:15},
      {id: 2,message: " It's my first post!",count:18},
      {id: 3,message: " I want to be a programmer!",count:20},
      {id: 4,message: "I feel I can do it!",count:10},
    ],
    newPostText : "It-kamasutra",
  }, 
  dialogsPage  : {
    dialogs: [
      {id: 1,name: "Eduard"},
      {id: 2,name: "Armen"},
      {id: 3,name: "Vardan"},
      {id: 4,name: "Karen"},
      {id: 5,name: "Sargis"},
    ],
    
    messages: [
      {id: 1,message: "Hello!"},
      {id: 2,message: "How are you?"},
      {id: 3,message: "What is your name?"},
    ],
    newPostMessage :"",
  },
  singersPage : {
     singers: [
        {id:'1',singer:'Michael Jackson'},
        {id:'2',singer:'Paul McCartney'},
        {id:'3',singer:'Stevie Wonder'}
      ],
      songs: [
        {id:"1",song:<a href="https://youtu.be/s3wNuru4U0I?t=2" target="_blank">We are the world</a>},
        {id:"2",song:<a href="https://youtu.be/6d5ST3tbPIU" target="_blank">Let it be</a>},
        {id:"3",song:<a href="https://youtu.be/1bGOgY1CmiU" target="_blank">I just called to say I love you</a>},
      ],
      newSingerName : "",
      
  }
     
      
}

export let addPost = () => {
  let newPost = {
    id:5,
    message: state.profilePage.newPostText,
    count:12,
  };
     state.profilePage.posts.push(newPost);
     state.profilePage.newPostText = "";
     rerenderEntireTree(state);
}

export let updateNewText = (newText) => {
  state.profilePage.newPostText = newText;
     rerenderEntireTree(state);
}

export let addMessage = () => {
  let newMessage = {
    id:6,
    name:state.dialogsPage.newPostMessage,
  }
  state.dialogsPage.dialogs.push(newMessage);
  state.dialogsPage.newPostMessage = "";
  rerenderEntireTree(state);
}

export let updateNewMessage = (newMessage) => {
  state.dialogsPage.newPostMessage = newMessage;
  rerenderEntireTree(state);
}
export let addSinger = () => {
  let newSinger = {
    id : 4,
    singer : state.singersPage.newSingerName,
  } 

  state.singersPage.singers.push(newSinger);
  state.singersPage.newSingerName = "";
  rerenderEntireTree(state);
}

export let updateNewSingerName = (newName) => {
  state.singersPage.newSingerName = newName;
  rerenderEntireTree();
}

export default state;