import React, { Component } from "react";
import UpdateComponent from "./withCounter";

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

export default UpdateComponent(HoverCounter, 10);
