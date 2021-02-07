import  React from 'react';
import style from './Music.module.css';

const Singer = (props) => {
    return(
        <div className={style.singer}>
            <div>{props.name}</div>
        </div>
    )
};

const Song = (props) => {
    return (
        <div className={style.song}>
            <div>{props.song}</div>
        </div>
    )
};

const Music = (props) => {

    let Songs = props.mySong.map( song => <Song song={song.song} />);

    let Singers = props.singers.map( sing => <Singer name={sing.name} />);

    return (
        <React.Fragment>
        <div className={style.music}>
            <div className={style.musicImg}> 
              <div>
                  <img src="https://is.gd/ho9np9"/>
              </div>  
              <div>
                  <img src="https://is.gd/TyrfCx"/>
              </div>
              <div>
                  <img src="https://is.gd/ORm39y"/>
                
              </div> 
              </div> 
           <div>
             {Singers}
           </div>
           <div>
              {Songs}
           </div>
           
        </div>
        </React.Fragment>
    )
 }
 export default Music;
