import  React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
let path = "/dialogs/" + props.id;

   return (
      <div>
         <div className={s.dialog + " " + s.active} >
               <NavLink to={path}>{props.name}</NavLink>
              </div>
      </div>
   );
}

const Message = (props) => {
   return (
      <div>
        <div className={s.message}>{props.message}</div> 
      </div>
   )
}

const Dialogs = (props) => {

 
let DialogElement = props.dialogs.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id}/> );
  

let MessageElement = props.messages.map( element => <Message message={element.message} id={element.id} /> );

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