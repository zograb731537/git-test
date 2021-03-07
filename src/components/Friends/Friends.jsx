import  React from 'react';
import { AddNameActionCreator, updateNewNameActionCreator } from '../../redux/state';
import style from './Friends.module.css';

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
      props.dispatch(updateNewNameActionCreator(frendsName)); 
    }
   
    let addName = () => {
      props.dispatch(AddNameActionCreator());
    }
    
   return (
    <div>
       <div className={style.friends}>
         {Names}
       </div>
         <textarea ref={addNewName} value={props.nameState.addName}
         onChange={onChangeName}/>
         <button onClick={addName}>Add Name</button>
       </div>
   )
}
export default Friends;