import React, { Component } from "react";
import UpdateComponent from "./withCounter";

export class ClickCounter extends Component {
  render() {
    const { count, incrementCount, incrementSomething } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name}Clicked {count} times
        </button>
        <button onClick={incrementSomething}>Hello</button>
      </div>
    );
  }
}

export default UpdateComponent(ClickCounter, 5);
