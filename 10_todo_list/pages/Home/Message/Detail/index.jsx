import React, { Component } from 'react';
// import qs from 'querystring';

const DetailData = [
    {id:"01", content:"Hello, world!"},
    {id:"02", content:"Hello, Utah!"},
    {id:"03", content:"Hello, SLC!"},
]

export default class Detail extends Component {
    
    render() {
        // params
        // const {id, title} = this.props.match.params

        // search
        // const {search} = this.props.location
        // const {id, title} = qs.parse(search.slice(1))

        // state
        const {id, title} = this.props.location.state || {}
        const findResult = DetailData.find((detailObj) =>{
            return detailObj.id === id
        }) || {}
        return (
            <ul>
                <li>Id: {id}</li>
                <li>Title: {title}</li>
                <li>Content: {findResult.content}</li>
            </ul>
        )
    }
}
