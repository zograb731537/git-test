import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";


const MyPosts = (props) => {
  
     let postsElement = props.posts.map( post => <Post name={post.message} count={post.count} id={post.id}  />);
     
     let newPostElement = React.createRef();

      let addPost = () => {
       props.addPost();
     }

     let onPostChange = () => {
        let text = newPostElement.current.value;
        props.apdateNewPostText(text)
     }
    return (      
        <div className={s.posts}>
            <h3>My Posts</h3>
         <div>
             <img src="https://is.gd/Xg5dWL/" />
          </div>
         <div>
             <div>
           <textarea onChange={onPostChange} placeholder="It-kamasutra"
            ref={newPostElement} value={props.newPostText}/>
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