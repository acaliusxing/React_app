import React, { Component } from 'react'

export default class Search extends Component {
    
    searchUsers = () => {
        const { inputElement: {value: keyWord}} = this
        this.props.updateAppState({isFirst: false, isLoading: true})
        fetch(`https://itunes.apple.com/search?term=${keyWord}&media=music&entity=album&attribute=artistTerm&limit=500`)
            .then((response) => response.json())
            .then(data => {this.props.updateAppState({isLoading: false, collections: data.results})})
            .catch(err => {this.props.updateAppState({isLoading: false, error: err.message})})
        // axios.get(`https://itunes.apple.com/search?term=${keyWord}&media=music&entity=album&attribute=artistTerm&limit=100`).then(
        //     response => {
        //         console.log(response.data)
        //         this.props.updateAppState({isLoading: false, users: response.data.results})
        //     },
        //     error => {
        //         this.props.updateAppState({isLoading: false, error: error.message})
        //     }
        // )

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Apple Music Search</h3>
                <div>
                    <input ref={c => this.inputElement = c} type="text" placeholder="Enter Artist Name"/>&nbsp;
                    <button onClick={this.searchUsers}>Search</button>
                </div>
            </section>
        )
    }
}
