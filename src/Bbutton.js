import React,{useState} from "react";
import Button from "@material-ui/core/Button";

export default function Cutton(props) {

const [counter,setCounter] = useState(0);
 
   function increment () {
    setCounter(counter + 1);
  
  };

  function decrement () {
    setCounter(counter - 1);
    
  };

  function reset () {
    setCounter(0);
  };
  return (
  <div >
      <h1>counter: {formatCount()}</h1>
      <button style={{border: '3px solid green'}} onClick={increment} type="button" className="btn btn-danger">Increment</button>

    <button style={{border: '3px solid green'}} onClick={decrement} type="button" className="btn btn-danger">Decrement</button>
<button style={{border: '3px solid green'}} onClick={reset} type="button" className="btn btn-danger">Reset</button>
    </div>
  );

  function formatCount(){
    
    return counter === 0 ? "Zero" : counter;
  }
}
