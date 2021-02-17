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
   return (
       <div className={s.friends}>
         {Names}
       </div>
   )
}
export default Friends;