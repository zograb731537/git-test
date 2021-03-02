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

    let AddPost = () => {
      props.addNames();
    }
    let onNameChange = () => {
      let friedsName = addNewName.current.value;
      props.updateFriendsName(friedsName);
    }
   
    
   return (
    <div>
       <div className={s.friends}>
         {Names}
       </div>
       <textarea ref={addNewName} onChange={onNameChange}
       value={props.nameState.addName}/>
       <button onClick={AddPost}>Add Name</button>
    </div>
   )
}
export default Friends;