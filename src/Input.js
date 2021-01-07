import React, { useState } from "react";


export default function Input(props) {
const [checked,setChecked] = useState(null);

const items = ['aaa','bbb','ccc','ddd'];

return (
  <ul>
    {items.map((item) => (
    <li key={item}>
      <label>
        <input type="radio"
        checked={checked === item}
        onChange={() => setChecked(item)}/>
        {item}
      </label>
    </li>
    ))}
  </ul>
)
}


















// const items = ['aaa','bbb','ccc','ddd'];

// return(
//   <ul>
//     {items.map((item) => (
//       <li key={item}>
//        <label>
//          <input type="radio"
//          checked={checked === item}
//          onChange={() => setChecked(item)}/>
//          {item}
//        </label>
//       </li>
//     ))}
//   </ul>
// )
// }
