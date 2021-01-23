import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./Post/MyPosts";


const Profile = (props) => {
    return (
      <div>
          <div>
             <img src="https://is.gd/xOdpWc" />
          </div>
          <MyPosts />
      </div>
    );
}

export default Profile;