import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post";


const MyPosts = (props) => {

    let postsElement = props.pageState.map( post => <Post name={post.message} count={post.count} id={post.id}  />);

    let addNewText = React.createRef();
    let addText = () => {
        props.dispatch({type : "ADD-POST"});
    }


    let onPostChange = () => {
        let text = addNewText.current.value;
        props.dispatch({type : "APDATE-NEW-TEXT", newText : text});
    }
    
    return (      
        <div className={style.posts}>
            <h3>My posts</h3>
         <div>
             <img src="https://is.gd/Xg5dWL/" />
          </div>
         <div>
             <div>
           <textarea ref={addNewText} value={props.newPostText}
           onChange={onPostChange}/>
           </div>
           <div>
           <button onClick={addText}>Add post</button>
           </div>
           </div>
           <div className={style.postMessage}>
               {postsElement}
           </div>
          </div>
    );
}

export default MyPosts;