let store = {
   _state : {
  profilePage : {
      posts: [
          {id: 1,message: " Hello , how are you!",count:15},
          {id: 2,message: " It's my first post!",count:18},
          {id: 3,message: " I want to be a programmer!",count:20},
          {id: 4,message: "I feel I can do it!",count:10},
        ],
        newPostText : "",
  },
  
  dialogsPage : {
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
  },
  countriesPage : {
      countries: [
          {name:'RUSSIA'},
          {name:'FRANCE'},
          {name:'AMERICA'},
        ],
        greetings: [
          {phrase:'ПРИВЕТ'},
          {phrase:'BONJOUR'},
          {phrase:'HELLO'},
        ],
  },
  singersPage : {
      singers: [
          {name:'Michael Jackson'},
          {name:'Stevie Wonder'},
          {name:'Toni Braxton'},
        ],
        mySong: [
          {song:<a href="https://youtu.be/s3wNuru4U0I" target="_blank">We are the world</a>},
          {song:<a href="https://youtu.be/1bGOgY1CmiU" target="_blank">I just called to say I love you</a>},
          {song:<a href="https://youtu.be/p2Rch6WvPJE" target="_blank">Un breaks my heart</a>}
        ]
  },
  
  friendsPage : {
      friends : [
        {name:"Edo"},
        {name:"Vika"},
        {name:"Tanya"},
      ],
        addName : "",
    }
  },
  getState () {
    return this._state;
  },

  _callSubscriber () {
    console.log('state');
  },
 addPost () {
     
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      count: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  addDialog ()  {
     
    let newName = {
      id: 6,
      name: this._state.dialogsPage.newPostName,
    };
    this._state.dialogsPage.dialogs1.push(newName);
    this._state.dialogsPage.newPostName = "";
    this._callSubscriber(this._state);
},
updateNewPostText (newText)  {
  this._state.profilePage.newPostText = newText;
  this._callSubscriber(this._state);
},

 updateNewPostName  (newName) {
  this._state.dialogsPage.newPostName = newName;
  this._callSubscriber(this._state);
},

addName () {
  let names = {
    name : this._state.friendsPage.addName,
  }
  this._state.friendsPage.friends.push(names);
  this._state.friendsPage.addName = "";
  this._callSubscriber(this._state);
},

updateNewName (newName)  {
  this._state.friendsPage.addName = newName;
  this._callSubscriber(this._state);
 },
subscribe (observer)  {
  this._callSubscriber = observer;
 },
}


    export default store;
    window.store = store; 
      