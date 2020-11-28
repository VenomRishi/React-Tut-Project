import React, { Component } from 'react'
import LifeCycleD from './LifeCycleD';

class LifeCycleC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'rishikesh'
        }
        console.log('LifeCycleC Constructor');
        
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleC getDerivedStateFromProps');
        return null
    }

    shouldComponentUpdate() {
        console.log('LifeCycleC shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleC getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycleC componentDidUpdate');
    }

    handleChangeState = () => {
        this.setState({
            name: 'Instarem'
        })
    }

    render() {
        console.log('LifeCycleC render');
        return (
            <div>
                LifeCycleC
                <button onClick={this.handleChangeState}>Change State</button>
                <LifeCycleD />
            </div>
            
        )
    }
    componentDidMount() {
        console.log('LifeCycleC componentDidMount');
    }
}

export default LifeCycleC
