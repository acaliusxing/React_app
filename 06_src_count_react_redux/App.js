import React, { Component } from 'react';
import CountApp from './containers/CountApp';
import Person from './containers/Person';


export default class App extends Component {

  render() {
    return (
      <div>
        <CountApp/>
        <hr/>
        <Person/>
      </div>
    )
  }
}

