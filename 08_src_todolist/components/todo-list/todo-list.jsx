import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import ListItem from '../list-item/list-item';
import {connect} from 'react-redux'
import {addTodos} from '../../redux/action'
import './todo-list.css'

class TodoList extends Component {

    handleKeyup = (event) => {
        const {target, keyCode} = event
        if(keyCode !== 13) return
        if(target.value.trim() === "") {
            alert("empty input");
            return
        }
        const todoObj = {"userId" : 1, "id": nanoid(), "title": target.value, "completed": false}
        this.props.addTodos(todoObj)
        target.value = ""

    }
    
    render() {
        return (
            <div className='content'>
                <div className="todolist">
                    <header className="todolist__header">Todo List</header>
                    <input className="todolist__input" type="text" placeholder="input here" onKeyUp={this.handleKeyup}/>
                    <ListItem />
                </div>
            </div>
        );
    }
}

export default connect(null, {addTodos})(TodoList)
