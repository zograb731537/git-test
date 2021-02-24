import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";


const MyPosts = (props) => {
  
     let postsElement = props.posts.map( post => <Post name={post.message} count={post.count} id={post.id}  />);
     
     let newPostElement = React.createRef();

      let addPost = () => {
      
      let text = newPostElement.current.value;
       props.addPost(text);
       newPostElement.current.value = "";
     }
    return (      
        <div className={s.posts}>
            <h3>My Posts</h3>
         <div>
             <img src="https://is.gd/Xg5dWL/" />
          </div>
         <div>
             <div>
           <textarea ref={newPostElement}></textarea>
           </div>
           <div>
           <button onClick={ addPost }>Add post</button>
           </div>
           </div>
           <div className={s.postMessage}>
               {postsElement}
           </div>
          </div>
    );
}

export default MyPosts;