import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import state, { addMessage, addPost, addSinger, updateNewMessage, updateNewText } from "./redux/state";
import { BrowserRouter } from 'react-router-dom';

  
export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
       <App state={state} addPost={addPost} 
       addMessage={addMessage} addSinger={addSinger}
       updateNewText={updateNewText} updateNewMessage={updateNewMessage}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}


