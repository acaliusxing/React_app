import { connect } from 'react-redux';
import { increment, decrement, incrementAsync } from '../../redux/actions/countapp';

import React, { Component } from 'react';

class CountApp extends Component {

    //state = {count: 0}

    handleIncrement = () => {
        const {value} = this.selectNumber
        this.props.increment(value*1)
    }

    handleDecrement = () => {
        const {value} = this.selectNumber
        this.props.decrement(value*1)
    }

    handleIncrementIfOdd = () => {
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0) this.props.increment(value*1)
    }

    handleIncrementAsync = () => {
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1, 1000)
    }

    render() {
        return (
            <div>
                <h2>Count Component, Total Person {this.props.personNumber}</h2>
                <h4>Current Sum: {this.props.count}</h4>
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

export default connect(
    //mapState
    state => ({ count: state.count, personNumber:state.persons.length }),
    //mapDispatch (auto dispatch)
    { increment, decrement, incrementAsync }
)(CountApp)
