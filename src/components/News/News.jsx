import  React from 'react';
import s from './News.module.css';

const NewCountry = (props) => {
   return (
       <div>
           <div className={s.newCountry}>{props.name}</div>
       </div>
   )
};

const Greeting = (props) => {
    return (
        <React.Fragment>
            <div className={s.phrases}>{props.phrase}</div>
        </React.Fragment>
    )
}

const News = (props) => {

//   const countries = [
//       {name:'RUSSIA'},
//       {name:'EUROPE'},
//       {name:'AMERICA'},
//   ]
//   const greetings = [
//       {phrase:'ПРИВЕТ'},
//       {phrase:'BONJOUR'},
//       {phrase:'HELLO'},
//   ]

  let Country = props.countries.map(country => <NewCountry name={country.name} />);

  let Phrases = props.greetings.map(phrase => <Greeting phrase={phrase.phrase} /> );

   return (
       <div className={s.news}>
           {Country}
           {Phrases}
           {/* <img src="https://is.gd/NyTkUO" alt=""/> */}
       </div>
   )
}
export default News;