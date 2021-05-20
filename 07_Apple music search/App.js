import React, { Component } from 'react';
import Search from './containers/Search';
import List from './containers/List';


export default class App extends Component {

  state = {
    collections: [],
    isFirst: true,
    isLoading: false,
    error: ""
  }

  updateAppState = (uerState) => {
    this.setState(uerState)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state} />
      </div>
    )
  }
}

