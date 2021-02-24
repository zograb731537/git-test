import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import Message from "./Message";


const Dialogs = (props) => {

 
   let DialogElement = props.dialogState.dialogs.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id}/> );
   

   let MessageElement = props.dialogState.messages.map( element => <Message message={element.message} id={element.id} /> );

    let addNewMessage = React.createRef();
    let addMessages = () => {
       let text = addNewMessage.current.value;
       addNewMessage.current.value = "";
       props.addMessage(text);
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
               <input type="text" ref={addNewMessage}/>
            </div>
            <button onClick={addMessages}>ADD</button>
         </div> 
      )
} 
export default Dialogs;