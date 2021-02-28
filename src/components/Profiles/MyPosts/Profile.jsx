import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./Post/MyPosts";
import ProfileInfo from "../ProfileInfo/Profileinfo";


const Profile = (props) => {
    return (
      <div>
        <ProfileInfo />
          <MyPosts pageState={props.pageState}
          newPostText={props.pageState.newPostText}
          updateNewPostText={props.updateNewPostText}
           addPost={props.addPost}/>
      </div>
    );
}

export default Profile;