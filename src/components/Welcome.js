import React, { Component } from 'react'

class Welcome extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage() {
        this.setState({
            message: ' thank you for subscribing'
        })
    }

    // render method will return null or html
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>

        )
    }
}
export default Welcome