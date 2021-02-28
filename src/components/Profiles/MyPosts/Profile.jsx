import React from "react";
import MyPosts from "./Post/MyPosts";
import ProfileInfo from "../ProfileInfo/Profileinfo";


const Profile = (props) => {

    return (
      <div>
        <ProfileInfo />
          <MyPosts  posts={props.pageState.posts} 
          addPost={props.addPost}
          newPostText={props.pageState.newPostText}
          updateNewText={props.updateNewText}/>
      </div>
    );
}

export default Profile;