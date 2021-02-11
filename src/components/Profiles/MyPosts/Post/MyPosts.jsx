import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";


const MyPosts = (props) => {
  
     let postsElement = props.posts.map( post => <Post name={post.message} count={post.count} id={post.id}  />);
    
    return (      
        <div className={s.posts}>
            <h3>My Posts</h3>
         <div>
             <img src="https://is.gd/Xg5dWL/" />
          </div>
         <div>
             <div>
           <textarea></textarea>
           </div>
           <div>
           <button>Add post</button>
           </div>
           </div>
           <div className={s.postMessage}>
               {postsElement}
           </div>
          </div>
    );
}

export default MyPosts;