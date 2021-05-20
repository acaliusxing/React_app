import React, { Component } from 'react';
import './index.css'

export default class List extends Component {
    render() {
        const {collections, isFirst, isLoading, error} = this.props
        return (
            isFirst ? <h2>Welcome to Apple Music Search</h2>:
            isLoading ? <h2>Loading.......</h2>:
            error ? <h3 style={{color: "red"}}>{error}</h3>:
            collections.map((collection)=>{
                return (
                    <div key={collection.collectionId} className="card">
                        <a rel="noreferrer" href={collection.collectionViewUrl} target="_blank">
                            <img alt='profile_img' src={collection.artworkUrl100} style={{width: '100px'}}/>
                        </a>
                        <p className="card-text">{collection.collectionName}</p>
                    </div>
                )
            })
            
        )
    }
}
