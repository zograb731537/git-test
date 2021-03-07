import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import Message from "./Message";


const Dialogs = (props) => {

 
   let DialogElement = props.dialogState.dialogs.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id}/> );
   

   let MessageElement = props.dialogState.messages.map( element => <Message message={element.message} id={element.id} /> );

    let addNewMessage = React.createRef();
    let addMessages = () => {
       props.dispatch({type : "ADD-MESSAGE"});
    }

    let onPostChange = () => {
      let text = addNewMessage.current.value;
      props.dispatch({type : "UPDATE-NEW-MESSAGE", newMessage : text });
    }
    
      return (
         <div className={s.dialogs}>
            <div className={s.dialogItems}>  
               {DialogElement}       
            </div>
            <div className={s.messages}>
               {MessageElement} 
            </div>
            <div>
               <textarea  ref={addNewMessage}
               onChange={onPostChange} value={props.dialogState.newPostMessage}/>
               <button onClick={addMessages}>Add Name</button>
            </div> 
         </div> 
      )
} 
export default Dialogs;