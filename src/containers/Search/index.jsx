import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {
    
    searchUsers = () => {
        const { inputElement: {value: keyWord}} = this
        this.props.updateAppState({isFirst: false, isLoading: true})
        axios.get(`https://api.github.com/search/users?q1=${keyWord}`).then(
            response => {
                this.props.updateAppState({isLoading: false, users: response.data.items})
            },
            error => {
                this.props.updateAppState({isLoading: false, error: error.message})
            }
        )

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.inputElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.searchUsers}>Search</button>
                </div>
            </section>
        )
    }
}
