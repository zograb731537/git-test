import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";


const MyPosts = (props) => {

    let posts = [
        {id: 1,message: " Hello , how are you!",count:15},
        {id: 2,message: " It's my first post!",count:18},
        {id: 3,message: " I want to be a programmer!",count:20},
        {id: 4,message: "I feel I can do it!",count:10},
     ];

     let postsElement = posts.map( post => <Post name={post.message} count={post.count} id={post.id}  />);
    
    return (      
        <div className={s.posts}>
            <h3>My posts</h3>
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