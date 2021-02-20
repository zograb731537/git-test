import  React from 'react';
import s from './Settings.module.css'

const Settings = (props) => {

    let addNewText = React.createRef();

    let addText = () => {
        let text = addNewText.current.value;
        alert(text);
    }
   return (
       <div className={s.settings}>
           <input type="text"/>
           <img src="https://is.gd/Ht7NXd" alt=""/>
           <div>
           <textarea ref={addNewText}></textarea>
           </div>
           <div>
           <button onClick={addText}>add</button>
           </div>
       </div>
   )
}
export default Settings;