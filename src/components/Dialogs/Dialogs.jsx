import  React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
   return (
       <div className={s.dialogs}>
          <div className={s.dialogItems}>
              <div className={s.dialog + " " + s.active} >
               <NavLink to="/dialogs/1">Eduard</NavLink>
              </div>
              <div className={s.dialog}>
               <NavLink to="/dialogs/2">Armen</NavLink>         
              </div>
              <div className={s.dialog}>
              <NavLink to="/dialogs/3">Vardan</NavLink>
              </div>
              <div className={s.dialog}>
              <NavLink to="/dialogs/4">Karen</NavLink>
              </div>
              <div className={s.dialog}>
              <NavLink to="/dialogs/5">Sargis</NavLink>
              </div>
          </div>
          <div className={s.messages}>
             <div className={s.message}>Hello!</div>
             <div className={s.message}>How are you!</div>
             <div className={s.message}>What is your name</div>
          </div>
       </div>
   )
}
export default Dialogs;