import React, { Component } from 'react';
import store from '../../redux/store';
import {createIncrementAction, createDecrementAction} from '../../redux/countapp_action'

export default class CountApp extends Component {

    //state = {count: 0}

    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    handleIncrement = () => {
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value*1))
    }

    handleDecrement = () => {
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }

    handleIncrementIfOdd = () => {
        const count = store.getState()
        const {value} = this.selectNumber
        if (count % 2 !== 0) store.dispatch(createIncrementAction(value*1))
    }

    handleIncrementAsync = () => {
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch(createIncrementAction(value*1))
        }, 1000)
    }

    render() {
        return (
            <div>
                <h2>Current Sum: {store.getState()}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.handleIncrement}>+</button>&nbsp;
                <button onClick={this.handleDecrement}>-</button>&nbsp;
                <button onClick={this.handleIncrementIfOdd}>incement if count is odd</button>&nbsp;
                <button onClick={this.handleIncrementAsync}>incement async</button>
            </div>
        )
    }
}
