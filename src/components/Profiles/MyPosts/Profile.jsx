import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./Post/MyPosts";
import ProfileInfo from "../ProfileInfo/Profileinfo";


const Profile = (props) => {
    return (
      <div>
        <ProfileInfo />
          <MyPosts posts={props.pageState.posts}
          newPostText={props.pageState.newPostText}
          apdateNewPostText={props.apdateNewPostText}
           addPost={props.addPost}/>
      </div>
    );
}

export default Profile;