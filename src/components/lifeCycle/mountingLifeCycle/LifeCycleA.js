import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'rishikesh'
        }
        console.log('LifeCycleA Constructor');
        
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps');
        return null
    }

    render() {
        console.log('LifeCycleA render');
        return (
            <div>
                LifeCycleA
                <LifeCycleB />
            </div>
            
        )
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount');
    }
}

export default LifeCycleA
