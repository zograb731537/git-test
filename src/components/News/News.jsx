import  React from 'react';
import style from './News.module.css';

const NewCountry = (props) => {
   return (
       <div>
           <div className={style.newCountry}>{props.name}</div>
       </div>
   )
};

const Greeting = (props) => {
    return (
        <React.Fragment>
            <div className={style.phrases}>{props.phrase}</div>
        </React.Fragment>
    )
}

const News = (props) => {



  let Country = props.countries.map(country => <NewCountry name={country.name} />);

  let Phrases = props.greetings.map(phrase => <Greeting phrase={phrase.phrase} /> );

   return (
       <div className={style.news}>
           <div>
             {Country}
           </div>
           <div>
             {Phrases}
           </div>
           <img src="https://is.gd/NyTkUO" alt=""/>
       </div>
   )
}
export default News;