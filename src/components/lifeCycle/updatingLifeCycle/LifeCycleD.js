import React, { Component } from 'react'

class LifeCycleD extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'rishikesh'
        }
        console.log('LifeCycleD Constructor');
        
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleD getDerivedStateFromProps');
        return null
    }

    shouldComponentUpdate() {
        console.log('LifeCycleD shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleD getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycleD componentDidUpdate');
    }

    render() {
        console.log('LifeCycleD render');
        return (
            <div>
                
                LifeCycleD
            </div>
        )
    }
    componentDidMount() {
        console.log('LifeCycleD componentDidMount');
    }
}

export default LifeCycleD
