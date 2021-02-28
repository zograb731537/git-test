import  React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
let path1 = "/dialogs/" + props.id;

   return (
      <div>
         <div className={s.dialog + " " + s.active} >
            <div>
               <Image />
            </div>
            <div>
               <NavLink to={path1}>
                  {props.name}
               </NavLink>
            </div>
         </div>
      </div>
   );
}

const Message = (props) => {
   return (
      <div>
        <div className={s.message}>
           {props.message}
        </div> 
      </div>
   )
}

const Image = (props) => {
   return(
      <div>
         <div className={s.dialogimage}>
            <img src="https://is.gd/jkZioL" alt=""/>
          </div>
      </div>
   )
}


const Dialogs = (props) => {

let DialogElement1 = props.dialogState.dialogs1.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
let DialogElement2 = props.dialogState.dialogs2.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  

let MessageElement1 = props.dialogState.messages1.map( element => <Message message={element.message} id={element.id} /> );
let MessageElement2 = props.dialogState.messages2.map( element => <Message message={element.message} id={element.id} /> );

let newPostElement = React.createRef();

let addPost = () => {
   props.addDialog();
}
let onPostChange = () => {
   let text = newPostElement.current.value;
   props.updateNewPostName(text)
}
   return (
       <div className={s.dialogs}>
            <div className={s.dialogItems1}>
            {DialogElement1}
            </div>
            <div className={s.dialogItems2}>
            {DialogElement2}
            </div>
            <div className={s.messages1}>
             {MessageElement1} 
           </div> 
            <div className={s.messages2}>
             {MessageElement2} 
           </div> 
           <div>
               <textarea ref={newPostElement} placeholder="Add Name"
               onChange={onPostChange} value={props.dialogState.newPostName} ></textarea>
            </div>
            <div>
               <button onClick={addPost}>Add Name</button>
            </div>
          </div>
   )
}
export default Dialogs;