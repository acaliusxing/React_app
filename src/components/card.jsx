import React, { Component } from 'react'

export default class Card extends Component {


    onClick = () => {
        const {color, handleOnclick} = this.props
        handleOnclick(color)
    }
  
    render() {
        const {color, selectColor } = this.props
        let borderColor = color === selectColor ? selectColor : "secondary"
        let borderStyle = borderColor === "secondary" ? "none" : "3px solid"
        let shadowColor = borderColor === "primary" ? "blue" : borderColor === "success" ? "green" : borderColor === "warning" ? 'yellow' : borderColor === "danger" ? "red" : "white"
        return (
            <div className="col-sm-6">
                <div className="card">
                    <div className={`card-body border-${borderColor}`} style={{border: `${borderStyle}`, boxShadow: `5px 8px ${shadowColor}`}}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className={`btn btn-${color}`} onClick={this.onClick}>Click to change color</button>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}
