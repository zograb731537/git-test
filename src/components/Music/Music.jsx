import  React from 'react';
import {updateNewSingerNameActionCreator , addSingerActionCreator} from "../../redux/state";
import {NavLink} from 'react-router-dom';
import style from './Music.module.css';

const Singer = (props) => {
    
   let path = '/music/' + props.id;

    return(
        <div>
              <div className={style.music + " " + style.active} >
               <NavLink to={path}>{props.name}</NavLink>
              </div>
        </div>
    )
}

const Songs = (props) => {

    return (
        <div>
         <div className={style.song}>{props.song}</div>
        </div>
    )
}

const Music = (props) => {


    let Song = props.singersState.songs.map( s => <Songs song={s.song} id={s.id} />);


     let Sing = props.singersState.singers.map( s => <Singer name={s.singer} id={s.id}/>); 
     
     let addNewSinger = props.singersState.newSingerName;

     let addSingers = () => {
         props.dispatch(addSingerActionCreator());
         }

         let onPostChange = (e) => {
            let text = e.target.value;
            props.dispatch(updateNewSingerNameActionCreator(text));
         }

    return (
        <>
        <div className={style.music + ' ' + style.active}> 
       
          <div className={style.musicImg}>
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
            <div className={style.musicItem}>
                {Sing}
            </div>
            <div className={style.song}>
                {Song}
            </div>
        </div>
          <div >
          <textarea  value={addNewSinger} onChange={onPostChange}/>
          <button onClick={addSingers}>Add Singer Name</button>
      </div>
      </>
    )
 }
 export default Music;
