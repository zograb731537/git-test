import React,{ Component } from "react";


export default class Time extends Component{
    constructor(props){
      super();
      this.state = {
        date: new Date(),
        image:'https://picsum.photos/200'
      }
      setInterval(() => {
        this.setState({
          date:new Date()
        })
      });
    }
     render (){
      return (
        <div style={{textAlign:"center"}}>
          <h1 style={{color:'red'}}>Hello</h1>
          <h1 style={{color:'blue'}}>now is : {this.state.date.toLocaleTimeString()}</h1>
          <img src={this.state.image} />
        </div>
      )
     }
    }
    
  // };
