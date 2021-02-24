import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import Message from "./Message";


const Dialogs = (props) => {

 
   let DialogElement = props.dialogState.dialogs.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id}/> );
   

   let MessageElement = props.dialogState.messages.map( element => <Message message={element.message} id={element.id} /> );

      return (
         <div className={s.dialogs}>
            <div className={s.dialogItems}>  
               {DialogElement}       
            </div>
            <div className={s.messages}>
               {MessageElement} 
            </div>
         </div> 
      )
} 
export default Dialogs;