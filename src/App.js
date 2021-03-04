import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profiles/MyPosts/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { Route } from "react-router-dom";

const App = (props) => {
  
  return (
   
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile"  render={() => <Profile pageState={props.state.profilePage}
           addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
          <Route path="/dialogs" render={() => <Dialogs dialogState={props.state.dialogsPage} 
           addDialog={props.addDialog}  updateNewPostName={props.updateNewPostName} />} />
          <Route path="/news" render={() => <News  countryState={props.state.countriesPage} />} />
          <Route path="/music" render={() => <Music singersState={props.state.singersPage} />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/friends" render={() => <Friends nameState={props.state.friendsPage}
          addName={props.addName} updateNewName={props.updateNewName}/>} />
        </div>
      </div>
  );
};

export default App;
