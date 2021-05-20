import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {

    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearAllCompleted = () => {
        this.props.clearAllCompleted()
    }

    render() {
        const {todos} = this.props
        const completedTodos = todos.reduce((pre, todo) => {
            return pre + (todo.completed ? 1: 0);
        }, 0)
        const totalTodos = todos.length

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={completedTodos === totalTodos && totalTodos !== 0 ? true: false}/>
                </label>
                <span>
                    <span>Completed {completedTodos}</span> / All {totalTodos}
                </span>
                <button onClick={this.handleClearAllCompleted} className="btn btn-danger">Clear Completed Items</button>
            </div>
        )
    }
}
