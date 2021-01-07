import React ,{useState} from 'react';
import Content from './Content';


export default function Show(props){
  const [showMode,setShowMode] = useState(true);

  const handleClick = () => {
    setShowMode(!showMode)
  }

  let content = null;
  if(showMode){
    content = <h1>Hello</h1>
  }else{
    content = <h1>By-By</h1>
  }
  return (
    <div>
      {content}
      <button onClick={handleClick}>{content}</button>
    </div>
  )
}

