import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello'
        }

        // 3rd approach
        // binding in class constructor
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this);

    // }

    // final approach
    // class property as arrow function
    clickHandler = ()=> {
        this.setState({
            message: 'Goodbye!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* binding in render */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
                {/* arrow function in render */}
                {/* <button onClick={() => this.clickHandler()}>Click me</button> */}
                <button onClick={ this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default EventBind
