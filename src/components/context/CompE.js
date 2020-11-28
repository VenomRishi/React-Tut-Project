import React, { Component } from 'react'
import CompF from './CompF'
import UserContext from './userContext'

export class CompE extends Component {
    
    // alternate
    static contextType = UserContext
    // its simpler but it has two limitations
    // 1. only works with class component
    // 2. you can subscribe to only single context user contextType

    render() {
        return (
            <div>
                Component E { this.context}
                <CompF/>
            </div>
        )
    }
}
// CompE.contextType = UserContext
// also can replace with ===> static contextType = UserContext
// it is mainly used when you have more than one consumer context

export default CompE
