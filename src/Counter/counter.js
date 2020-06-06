import React, { Component } from "react";

class CounterButton extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState(({ count }) => ({
      count: ++count,
    }));
  };

  handleReset = (count) => {
    this.setState({ count });
  };

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button className="plusOneBtn" onClick={this.handleClick}>
          +1
        </button>
        <button className="resetBtn" onClick={() => this.handleReset(10)}>
          Reset to 10
        </button>
      </div>
    );
  }
}

export default CounterButton;
