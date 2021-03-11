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
     
    let addNewName = props.nameState.addName;

    let onChangeName = (e) => {
      let frendsName = e.target.value;
      props.dispatch(updateNewNameActionCreator(frendsName)); 
    }
   
    let addNames = () => {
      props.dispatch(AddNameActionCreator());
    }
    
   return (
    <div>
       <div className={style.friends}>
         {Names}
       </div>
         <textarea value={addNewName} onChange={onChangeName}/>
         <button onClick={addNames}>Add Name</button>
       </div>
   )
}
export default Friends;