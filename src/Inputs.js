import React, { useState } from "react";

export default function Inputs(props){

   const [value,setValue] = useState('Яблоко');

   const handleChange = (e) => {
     setValue(e.target.value);
     console.log(e.target.value);
   }
   return (
     <div style={{textAlign:'center'}}>
       <select onChange={handleChange} >
         <option value="Яблоко">Яблоко</option>
         <option value="Груша">Груша</option>
         <option value="Кокос">Кокос</option>
         <option value="Банан">Банан</option>
       </select>
     </div>
   )
}