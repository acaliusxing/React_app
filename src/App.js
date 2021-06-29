import React, { Component } from 'react';
import Card from './components/card'

export default class App extends Component {

  state = {
    colors: ['primary', 'success', 'danger', 'warning'],
    selectColor: 'dark'
  }

  handleOnclick = (color) => {
    this.setState({selectColor: color})
  }


  render() {
    const { colors, selectColor } = this.state
    return (
      <div className='container'>
        <h1 className={`text-${selectColor}`} style={{textAlign: "center"}}>Title: color changed with buttons</h1>
        <br />
        <div className="row">
          {colors.map(color => (
            <Card key={color} color={color} selectColor={selectColor} handleOnclick={this.handleOnclick}/>
          ))}
        </div>
      </div>
    )
  }
}

