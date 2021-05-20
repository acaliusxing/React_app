import React, { Component } from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css';

export default class App extends Component {

  state = {todos:[
    {id: "001", name:"Eating", completed:false},
    {id: "002", name:"Sleep", completed:true},
    {id: "003", name:"Coding", completed:false},
    {id: "004", name:"Shopping", completed:true}
  ]}

  addTodo = (todoObj) =>{
      const {todos} = this.state
      const newTodos = [todoObj,...todos]
      this.setState({todos:newTodos})
  }

  updateTodo = (id, isCompleted) => {
      const {todos} = this.state
      const newTodos = todos.map((todo)=> {
        if(todo.id === id) return {...todo, completed: isCompleted}
        else return todo
      })
      this.setState({todos:newTodos})
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    this.setState({todos:newTodos})
  }

  checkAllTodo = (completed) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
        return {...todoObj, completed: completed}
    })
    this.setState({todos:newTodos})
  }

  clearAllCompleted = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {
      return todo.completed === false
    })
    this.setState({todos:newTodos})
  }

  render() {
    const{todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllCompleted={this.clearAllCompleted}/>
        </div>
      </div>
    )
  }
}
