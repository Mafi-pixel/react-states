import React, { Component } from "react";
import MyCounterComponent from "../MyCounterComponent";
import MyEventCounter from "../MyEventCounter";
class ClassStateExample extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      state2: "Test",
      state3: 0,
    };
  }

  Mafi = () => {
      console.log(this.state.counter)
    // alert("You clicked me!!");
    this.setState({
      counter: this.state.counter + 1 
    });
    this.setState((d)=>{
        return{state3:d.counter % 2 != 0 ? d.counter-1:d.counter}
    })
    
  }

  render() {
      {console.log(this.state.counter)}
    return (
      <div>
        <h1>This is where you call the state</h1>
        <h2>To call the state: {this.state.state2}</h2>
        <button onClick={this.Mafi}> Click me </button>
        <MyCounterComponent  count={this.state.counter}/>
        <MyEventCounter even={this.state.state3}/>
      </div>
    );
  }
}

export default ClassStateExample;
