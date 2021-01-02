import React, { useState } from "react";

export default function Input(props){
  const [value,setValue] = useState('Яблоко');

  const handleChange = (e) => {
    setValue(e.target.value)
    console.log(e.target.value);
  }
  
  return (
  <select value={value} onChange={handleChange}>
    <option value='Яблоко'>Яблоко</option>
    <option value='Банан'>Банан</option>
    <option value='Кокос'>Кокос</option>
    <option value='Груша'>Груша</option>
  </select>
  )
}


// export default function Input(props) {
//   const [checked, setChecked] = useState(null);

//    const items = ['Яблоко','Банан','Кокос','Груша']
//   return (
//     <ul>
      
//       {items.map((item) => (
//         <li key={item}>
//       <label>
//         <input
//           type="radio"
//           checked={checked === item}
//           onChange={() => setChecked(item)}
//         />
//         {item}
//       </label>
//       </li>
//       ))}
      
//     </ul>
//   );
// }
