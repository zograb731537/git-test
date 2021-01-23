import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";


const MyPosts = (props) => {
    return (      
        <div className={s.posts}>
         <div>
             <img src="https://is.gd/Xg5dWL/" />
          </div>
         <div>
           <textarea></textarea>
           <button>Add post</button>
           </div>
           <div style={{color:'white'}}>
               <Post name=" Hello , how are you!" count="15"/>
               <Post name=" It's my first post!" count="18"/>
               <Post name=" I want to be a programmer!" count="20"/>
               <Post name=" I feel I can do it!" count="10"/>
           </div>
          </div>
    );
}

export default MyPosts;