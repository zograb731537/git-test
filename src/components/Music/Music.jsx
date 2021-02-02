import  React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Music.module.css';

const Singer = (props) => {
    
   let path = '/music/' + props.id;

    return(
        <div>
              <div className={s.music + " " + s.active} >
               <NavLink to={path}>{props.name}</NavLink>
              </div>
        </div>
    )
}

const Songs = (props) => {

    return (
        <div>
         <div className={s.song}>{props.song}</div>
        </div>
    )
}

const Music = (props) => {

    let songs = [
        {id:"1",song:<a href="https://youtu.be/s3wNuru4U0I?t=2">We are the world</a>},
        {id:"2",song:<a href="https://youtu.be/6d5ST3tbPIU">Let it be</a>},
        {id:"3",song:<a href="https://youtu.be/1bGOgY1CmiU">I just called to say I love you</a>},
    ]

    let Song = songs.map( s => <Songs song={s.song} id={s.id} />);

    let singers = [
        {id:'1',singer:'Michael Jackson'},
        {id:'2',singer:'Paul McCartney'},
        {id:'3',singer:'Stevie Wonder'}
    ]

     let Sing = singers.map( s => <Singer name={s.singer} id={s.id}/>);   

    return (
        <div className={s.music + ' ' + s.active}> 
          <div className={s.musicImg}>
            <div>          
            <img src="https://is.gd/Ddj4Rg" />
            </div>          
            <div>          
            <img src="https://is.gd/wHzrfB" />
            </div>
            <div>          
            <img src="https://is.gd/CMl1Oz" />
            </div> 
            </div>        
            <div className={s.musicItem}>
                {Sing}
            </div>
            <div className={s.song}>
                {Song}
            </div>
        </div>
    )
 }
 export default Music;
