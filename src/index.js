import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';


let posts = [
  {id: 1,message: " Hello , how are you!",count:15},
  {id: 2,message: " It's my first post!",count:18},
  {id: 3,message: " I want to be a programmer!",count:20},
  {id: 4,message: "I feel I can do it!",count:10},
];

let dialogs = [
  {id: 1,name: "Eduard"},
  {id: 2,name: "Armen"},
  {id: 3,name: "Vardan"},
  {id: 4,name: "Karen"},
  {id: 5,name: "Sargis"},
];


let messages = [
  {id: 1,message: "Hello!"},
  {id: 2,message: "How are you?"},
  {id: 3,message: "What is your name?"},
]

const countries = [
  {name:'RUSSIA'},
  {name:'EUROPE'},
  {name:'AMERICA'},
]
const greetings = [
  {phrase:'ПРИВЕТ'},
  {phrase:'BONJOUR'},
  {phrase:'HELLO'},
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}
    countries={countries} greetings={greetings} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
