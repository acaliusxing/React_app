import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteTodo, updateTodo} from '../../redux/actions'
import './index.css';

class Item extends Component {

    state = {
      mouseOn: false
    }

    render() {
      const {id, name, completed} = this.props
      const {mouseOn} = this.state
        return (
            <li style={{backgroundColor: mouseOn ? '#ddd' : 'white'}} 
                onMouseOver={()=>this.setState({mouseOn: true})}
                onMouseOut={()=>this.setState({mouseOn:false})}>
              <label>
                <input type="checkbox" onChange={(event)=>this.props.updateTodo([id, event.target.checked])} checked={completed}/>
                <span>{name}</span>
              </label>
              <button  onClick={()=>this.props.deleteTodo(id)} className="btn btn-danger" style={{display: mouseOn ? "block" : "none"}}>Delete</button>
            </li>
        )
    }
}

export default connect(null, {deleteTodo, updateTodo})(Item)