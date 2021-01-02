import React ,{useState} from 'react';
import Content from './Content';

export default function Show(props){
    const [showMode,setShowMode] = useState(true);
    const hendleClick = () => { 
        setShowMode(!showMode);
};

let content = null;

if(showMode){
  content = <Content />
};

  return (
  <div>
    <button onClick={hendleClick}>Show Toggle</button>
        {content}
        </div>
  );
}