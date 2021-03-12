import React from 'react';
import {AddMessageActionCreator , updateNewMessageActionCreator} from "../../redux/state";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import Message from "./Message";


const Dialogs = (props) => {

   let DialogElement = props.dialogState.dialogs.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id}/> );
   

   let MessageElement = props.dialogState.messages.map( element => <Message message={element.message} id={element.id} /> );

    let addNewMessage = props.dialogState.newPostMessage;
    let addMessages = () => {
       props.dispatch(AddMessageActionCreator());
    }

    let onPostChange = (e) => {
       let text = e.target.value;
      props.dispatch(updateNewMessageActionCreator(text));
    }
    
      return (
         <div className={style.dialogs}>
            <div className={style.dialogItems}>  
               {DialogElement}       
            </div>
            <div className={style.messages}>
               {MessageElement} 
            </div>
            <div>
               <textarea  
               onChange={onPostChange} value={addNewMessage} placeholder="Enter message"/>
               <button onClick={addMessages}>Add Name</button>
            </div> 
         </div> 
      )
} 
export default Dialogs;