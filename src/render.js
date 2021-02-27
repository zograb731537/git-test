import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {addDialog, addPost, apdateNewPostName, apdateNewPostText} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost}
         addDialog={addDialog} apdateNewPostText={apdateNewPostText}
         apdateNewPostName={apdateNewPostName} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
}
