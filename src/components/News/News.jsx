import  React from 'react';
import s from './News.module.css';
import {NavLink} from 'react-router-dom';

const MyNews = (props) => {

    let path = "/news/" + props.id
  return (
    <div className={s.news}>
     <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Greeting = (props) => {
    return (
        <div className={s.news}>
         {props.greeting}
        </div>
    )
}

const News = (props) => {

    return (
       <div className={s.news}>
          <div className={s.country}>
           <MyNews name='RUSSIA' id='1'/>
           <MyNews name='EUROPE' id='2'/>
           <MyNews name='AMERIKA' id='3'/>
           </div>
           <div className={s.greeting}>
             <Greeting greeting='ПРИВЕТ'/>  
             <Greeting greeting='BOJOUR'/>  
             <Greeting greeting='HELLO'/>  
           </div>       
           <div>
            <img src="https://is.gd/NyTkUO" alt=""/>
            </div> 
           
         
       </div>
       
   )
}
export default News;