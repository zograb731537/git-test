
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addMessage, addPost, addSinger, updateNewMessage, updateNewText ,updateNewSingerName} from "./redux/state";
import { BrowserRouter } from 'react-router-dom';

  
 let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
       <App state={state} addPost={addPost} 
       addMessage={addMessage} addSinger={addSinger}
       updateNewText={updateNewText} updateNewMessage={updateNewMessage}
       updateNewSingerName={updateNewSingerName}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
