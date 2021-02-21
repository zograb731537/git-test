import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post";


const MyPosts = (props) => {

   let addNewText = React.createRef();
    let addText = () => {
let text = addNewText.current.value;
alert(text);
    }

     let postsElement = props.posts.map( post => <Post name={post.message} count={post.count} id={post.id}  />);
    
    return (      
        <div className={style.posts}>
            <h3>My posts</h3>
         <div>
             <img src="https://is.gd/Xg5dWL/" />
          </div>
         <div>
             <div>
           <textarea ref={addNewText}></textarea>
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