import React from "react";
import s from"./Post.module.css";


const Post = (props) => {
    return (
         <div>          
           <div className={s.postPhoto}>
               <img src="https://is.gd/toFYA6"/>
                 {props.name}
             <div>
                 <span>Like:{props.count}</span>
             </div>
           </div> 
         </div>          
    );
}

export default Post;