import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log('Callback value', this.state.count)
        // )
        // console.log('synchronous code',this.state.count);

        // for changing state in one go

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                Count- {this.state.count}
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Increment by five</button>
            </div>
        )
    }
}

export default Counter
