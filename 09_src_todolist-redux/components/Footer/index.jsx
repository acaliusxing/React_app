import React, { Component } from 'react';
import {connect} from "react-redux";
import {checkAllTodo, deleteAllCompleted} from '../../redux/actions'
import './index.css';

class Footer extends Component {

    render() {
        const {todos, checkAllTodo, deleteAllCompleted} = this.props
        const completedAmount = todos.reduce((prev, todo) => {
            prev += todo.completed ? 1 : 0;
            return prev
        },0)

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={(event)=>checkAllTodo(event.target.checked)} checked={completedAmount === todos.length && todos.length !== 0 ? true : false}/>
                </label>
                <span>
                    <span>Completed {completedAmount}</span> / All {todos.length}
                </span>
                <button  onClick={()=>deleteAllCompleted()} className="btn btn-danger">Clear Completed Items</button>
            </div>
        )
    }
}

export default connect(state=>({todos: state.todos}), {checkAllTodo, deleteAllCompleted})(Footer)