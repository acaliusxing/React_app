import React, { Component } from 'react';
import {connect} from "react-redux";
import {addTodo} from '../../redux/actions'
import {nanoid} from 'nanoid';
import './index.css';

class Header extends Component {

    handleKeyup = (event) => {
        const {keyCode, target} = event
        if(keyCode !== 13) return 
        if(target.value === "") {
            alert("empty input")
            return
        }
        const todoObj = {id: nanoid(), name: target.value, completed:false}
        this.props.addTodo(todoObj)
        target.value = ""
    }


    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyup} type="text" placeholder="Please Eneter Your Todo List" />
            </div>
        )
    }
}

export default connect(null, {addTodo})(Header)