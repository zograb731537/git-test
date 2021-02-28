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

    let addPost = () => {
        props.addNames();
    }

    let onPostChange = () => {
        let text = addNewName.current.value;
        props.updateFriendsName(text);
    }
    
    
   return (
    <div>
       <div className={s.friends}>
         {Names}
       </div>
       <div>
           <textarea value={props.nameState.addNames} 
           onChange={onPostChange} ref={addNewName}/>
           <button onClick={addPost}>Add Name</button>
       </div>
    </div>
   )
}
export default Friends;