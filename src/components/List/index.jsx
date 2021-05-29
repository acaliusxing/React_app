import React, { Component } from 'react';
import {connect} from "react-redux";
import Item from '../Item';
import './index.css';

class List extends Component {

    render() {
        return (
            <ul className="todo-main">
                {this.props.todos.map(todo => (
                    <Item key={todo.id} {...todo} />
                ))}
            </ul>
        )
    }
}

export default connect(state=>({todos: state.todos}))(List)