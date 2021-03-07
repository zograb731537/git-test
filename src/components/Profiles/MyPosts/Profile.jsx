import React from "react";
import MyPosts from "./Post/MyPosts";
import ProfileInfo from "../ProfileInfo/Profileinfo";


const Profile = (props) => {

    return (
      <div>
        <ProfileInfo />
          <MyPosts  pageState={props.pageState.posts} 
          dispatch={props.dispatch}/>
      </div>
    );
}

export default Profile;