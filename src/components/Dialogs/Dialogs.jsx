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

let dialogs = [
   {id: 1,name: "Eduard"},
   {id: 2,name: "Armen"},
   {id: 3,name: "Vardan"},
   {id: 4,name: "Karen"},
   {id: 5,name: "Sargis"},
];


let messages = [
   {id: 1,message: "Hello!"},
   {id: 2,message: "How are you?"},
   {id: 3,message: "What is your name?"},
]

let DialogElement = dialogs.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id}/> );
  

let MessageElement = messages.map( element => <Message message={element.message} id={element.id} /> );

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