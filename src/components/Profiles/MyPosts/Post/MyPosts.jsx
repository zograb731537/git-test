import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/state";
import style from "./MyPosts.module.css";
import Post from "./Post";


const MyPosts = (props) => {
  
     let postsElement = props.pageState.posts.map( post => <Post name={post.message} count={post.count} id={post.id}  />);
     
     let newPostElement = React.createRef();

      let addPost = () => {
       props.dispatch(addPostActionCreator());
     }

     let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
     }
    return (      
        <div className={style.posts}>
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
           <div className={style.postMessage}>
               {postsElement}
           </div>
          </div>
    );
}

export default MyPosts;