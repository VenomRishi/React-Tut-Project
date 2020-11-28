import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // short circuit operator
        return this.state.isLoggedIn && <div>Welcome instarem</div>


        // ternary conditional operator

        // return (
        //     this.state.isLoggedIn ? 
        //     <div>Welcome instarem</div> : <div>Welcome Guest</div>
        // )
        
        // elemet variables

        // let message
        // if(this.state.isLoggedIn) {
        //     message=<div>Welcome instarem</div>
        // }else  {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // if-else
        
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome instarems</div>            
        // }else {
        //     return <div>Welcome Guest</div>            
        // }

    
    }
}

export default UserGreeting
