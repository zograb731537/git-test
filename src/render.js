import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import state, { addMessage, addPost, addSinger } from "./redux/state";
import { BrowserRouter } from 'react-router-dom';

  
export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
       <App state={state} addPost={addPost} 
       addMessage={addMessage} addSinger={addSinger}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}


