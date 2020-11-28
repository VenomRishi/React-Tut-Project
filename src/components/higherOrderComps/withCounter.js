import React from "react";

// higher order component (HOC)
const UpdateComponent = (OriginalComponent, incrementCount, incrementSomething) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementCount };
      });

      
    };

    incrementSomething = ()=> {
      
    }

    render() {
      //   return <OriginalComponent name="rishikesh" />;
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdateComponent;
