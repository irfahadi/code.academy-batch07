import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        counter:0
    }
    
    increment = () =>{
        this.setState({counter : this.state.counter+1})
    }
    
    render() {
        return (
            <div>
                <h2>Counter : {this.state.counter}</h2>
                <button onClick={this.increment}>Add</button>
                <button onClick={()=>this.setState({counter : this.state.counter-1})}>Minus</button>
            </div> 
        )
    }
}
