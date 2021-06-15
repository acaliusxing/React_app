import React, { Component } from 'react';
import {connect} from 'react-redux'
import Header from './components/header/header';
import TodoList from './components/todo-list/todo-list';
import {generateTodos} from './redux/action'

class App extends Component {


  componentDidMount () {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => response.json())
      .then(data => this.props.generateTodos(data))
  }

  render() {
    return (
      <>
        <Header />
        <TodoList />
      </>
    );
  }
}

export default connect(null, {generateTodos})(App)

