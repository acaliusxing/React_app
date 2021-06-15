import React, { Component } from 'react';
import {deleteTodos} from '../../redux/action';
import {connect} from'react-redux'

import './list-item.css'

class ListItem extends Component {
    render() {
        return (
            <div>
                <ul id="todolist-content">
                    {this.props.todos.map((todo) => {
                        const {id, title} = todo;
                        return (
                            <li key={id}>
                                <span>{title}</span>
                                <button className="btn-remove" onClick={()=>this.props.deleteTodos(id)}>X</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {todos: state.todos}
)

export default connect(mapStateToProps, {deleteTodos})(ListItem)
