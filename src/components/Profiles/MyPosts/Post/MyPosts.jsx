import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";


const MyPosts = (props) => {
  
     let postsElement = props.pageState.posts.map( post => <Post name={post.message} count={post.count} id={post.id}  />);
     
     let newPostElement = React.createRef();

      let addPost = () => {
       props.dispatch({type : "ADD-POST"});
     }

     let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type : "UPDATE-NEW-POST-TEXT" , newText : text })
     }
    return (      
        <div className={s.posts}>
            <h3>My Posts</h3>
         <div>
             <img src="https://is.gd/Xg5dWL/" />
          </div>
         <div>
             <div>
           <textarea onChange={onPostChange} placeholder="Add Post"
            ref={newPostElement} value={props.pageState.newPostText}/>
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