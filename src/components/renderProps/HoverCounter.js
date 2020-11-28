import React, { Component } from "react";

export class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <h2 onMouseOver={incrementCount}>
        Hover {count} times
      </h2>
    ); 
  }
}

export default HoverCounter
