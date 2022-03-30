import React, { Component } from "react";
class ClassShow extends Component {
  state = {
    count: 10,
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    let timer = this.state.count;
    timer--;
    this.setState({ count: timer });
  }

  render() {
    return (
      <div>
        <div>classInterval</div>
        {this.state.count}
      </div>
    );
  }
}

export default ClassShow;
