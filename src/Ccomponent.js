import { render } from "@testing-library/react";
import React, { Component } from "react";
import Menu from "./Menu";
import "./App.css";
import Fcomponent from "./Fcomponent";
//  import Button from "@material-ui/core/Button";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> Error {error.message} </p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <ul
          style={{ textAlign: "right", fontSize: "30px", fontStyle: "oblique" }}
        >
          {items.map((item) => (
            <li key={item.name}>
              {item.strDrink}
              <img width="100" height="100" src={item.strDrinkThumb} />
            </li>
          ))}     
        </ul>
      );
    }
  }
}
  //   constructor(){
  //       super();
  //       this.state = {
  //         input:'',
  //         items:[]
  //       }
  //     this.handleChange = this.handleChange.bind(this)
  //     this.handleSubmit = this.handleSubmit.bind(this)
  //   }
  //   handleChange(event){
  //       this.setState({
  //        input:event.target.value
  //       });
  //   }
  //   handleSubmit(event){
  //       event.preventDefault();
  //       this.setState({
  //    input:this.state.input,
  //           items:[...this.state.items, this.state.input]
  //       });
  //   }
  //   render(){
  //       return(
  //           <div>
  //               <form onSubmit={this.handleSubmit}>
  //                   <input value={this.state.value} onChange={this.handleChange}/>
  //                   <button type='submit'>Submit!</button>
  //               </form>
  //               <ul>
  //                   {this.state.items.map((item,index) => (
  //                      <li key={index}>{item}</li>
  //                   ))}
  //               </ul>
  //           </div>
  //       )
  //   }
  //    constructor(props){
  //      super(props);
  //      this.state = {
  //          input:'',
  //          items:[]
  //      }
  //      this.handleChange = this.handleChange.bind(this);
  //      this.handleSubmit = this.handleSubmit.bind(this);
  //  }

  //  handleChange(event){
  //      this.setState({
  //        input:event.target.value
  //      });
  //  }

  //  handleSubmit(event){
  //      event.preventDefault();
  //      this.setState({
  //      input:this.state.input,
  //      items:[...this.state.items,this.state.input]
  //      });
  //  }

  //  render(){
  //      return(
  //          <div>
  //              <form onSubmit={this.handleSubmit}>
  //               <input value={this.state.input} onChange={this.handleChange}/>
  //               <Button type="submit"variant="outlined" color="secondary" >
  //         Primary
  //       </Button>
  //              </form>
  //              <ul>
  //                {this.state.items.map((item,index) => (
  //                   <li key={index}>{item}</li>
  //                ))}
  //              </ul>
  //          </div>
  //      )
  //  }
  //  constructor(props) {
  //      super(props);

  //      this.state = {
  //           name:'please press button'
  //      }
  //      this.updateData = this.updateData.bind(this);
  //  }
  //  updateData = (value) =>{
  //    this.setState({
  //     name:value
  //    });
  //  }
  //  render(){
  //      return (
  //        <div>
  //        <p>State:{this.state.name}</p>
  //         <Fcomponent updateData={this.updateData} />
  //        </div>
  //      );
  //      }
  //     };
  //  constructor(props) {
  //    super(props)

  //    this.state = {
  //       input1:'',
  //       input2:'',
  //       input3:'',
  //       init:''
  //    }
  //    this.handleChange1 = this.handleChange1.bind(this);
  //    this.handleChange2 = this.handleChange2.bind(this);
  //    this.handleChange3 = this.handleChange3.bind(this);
  //    this.inpuInit = this.inpuInit.bind(this);
  //  }

  //  handleChange1(event){
  //     this.setState({
  //       input1:event.target.value
  //     });
  //  }

  //  handleChange2(event){
  //   this.setState({
  //     input2:event.target.value
  //   });
  // }

  // handleChange3(event){
  //   this.setState({
  //     input3:event.target.value
  //   });
  // }

  // inpuInit(event){
  //   event.preventDefault();
  //   this.setState({
  //     init:Number(this.state.input1)+ Number(this.state.input2)+ Number(this.state.input3)
  //   });
  // }

  // render(){
  //   return (
  //     <div>
  //       <form onSubmit={this.inpuInit}>
  //        <input value={this.state.input1} onChange={this.handleChange1}/>
  //        <input value={this.state.input2} onChange={this.handleChange2}/>
  //        <input value={this.state.input3} onChange={this.handleChange3}/>
  //        <p>SUM: {this.state.init}</p>
  //        <Button style={{border:'2px solid green'}} type="submit" variant="contained" color="secondary" >
  //         SUM
  //       </Button>
  //       </form>
  //     </div>
  //   );
  // }

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //      items:['Ivan','Viktor','Sergey'],
  //      value:""
  //   }
  //     this.addItem = this.addItem.bind(this);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.deleteItem = this.deleteItem.bind(this);
  // }
  // deleteItem(index){
  //   this.state.items.splice(index,1);
  //   this.setState({
  //     items:this.state.items
  //   });
  // }

  // handleChange(event){
  //   this.setState({
  //     value:event.target.value
  //   })
  // }

  // addItem(event){
  //   this.state.items.push(this.state.value);
  //   this.setState({
  //     items:this.state.items
  //   });
  //   event.preventDefault();
  // }

  // render(){

  //   const list = this.state.items.map((item,index) => {
  //     return <li key={index}>{item}
  //     <button button onClick={this.deleteItem}>delete</button>
  //     </li>
  //   });
  //   return (
  //     <div>

  //     <ul>
  //       {list}
  //     </ul>
  //     <form onSubmit={this.addItem}>

  //      <input value={this.state.value} onChange={this.handleChange}/>
  //      <button type="submit">submit</button>
  //     </form>
  //     </div>
  //   );
  // }
  // }

