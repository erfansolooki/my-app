import React, { Component } from "react";
import Styles from "./CounterClass.module.css";
class CounterClass extends Component {
  state = {
    name: "",
    counter: 0,
  };

  ChangeNameHandler = (event) => {
    const newInput = event.target.value;
    this.setState({ name: newInput });
  };

  onChange = () => {
    let count = this.state.counter;
    count++;
    this.setState({ counter: count });
  };

  componentDidMount() {
    // console.log("document title updating");
    document.title = `Clicked ${this.state.counter} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter !== prevState.counter) {
      console.log("updating");
      document.title = `Clicked ${this.state.counter} times`;
    }
  }

  render() {
    return (
      <div className="counter">
        <p className={Styles.p}>My name is : {this.state.name}</p>
        <input type="text" id="firstName" onChange={this.ChangeNameHandler} />
        <p className={Styles.p1}>you're counter is : {this.state.counter}</p>
        <button onClick={this.onChange}>Couter</button>
      </div>
    );
  }
}

export default CounterClass;
