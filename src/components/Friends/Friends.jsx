import  React from 'react';
import s from './Friends.module.css';

const FriendsName = (props) => {
    return (
        <div>
            <div>{props.name}</div>
        </div>
    )
}


const Friends = (props) => {

    let Names = props.nameState.friends.map(name => <FriendsName name={name.name} />);
     
    let addNewName = React.createRef();

    let onChangeName = () => {
      let frendsName = addNewName.current.value;
      props.dispatch({type :"UPDATE-NEW-NAME" , newName : frendsName}); 
    }
   
    let addName = () => {
      props.dispatch({type : "ADD-NAME"});
    }
    
   return (
    <div>
       <div className={s.friends}>
         {Names}
       </div>
         <textarea ref={addNewName} value={props.nameState.addName}
         onChange={onChangeName}/>
         <button onClick={addName}>Add Name</button>
       </div>
   )
}
export default Friends;