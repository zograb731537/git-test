import React from "react";
import MyPosts from "./Post/MyPosts";
import ProfileInfo from "../ProfileInfo/Profileinfo";


const Profile = (props) => {

    return (
      <div>
        <ProfileInfo />
          <MyPosts  posts={props.posts}/>
      </div>
    );
}

export default Profile;