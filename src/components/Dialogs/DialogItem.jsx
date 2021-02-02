import React from "react";
import { NavLink } from 'react-router-dom';
import style from "./Dialogs.module.css";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
       return (
          <div>
             <div className={style.dialog + " " + style.active} >
                   <NavLink to={path}>{props.name}</NavLink>
                  </div>
          </div>
       );
    }
    export default DialogItem;