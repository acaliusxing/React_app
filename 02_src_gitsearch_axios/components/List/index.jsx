import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const {users, isFirst, isLoading, err} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h3>Wekcome to github search</h3> :
                    isLoading ? <h3>Loading...</h3> :
                    err ? <h3 style={{color: "red"}}>{err}</h3> :
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                    <img alt="profile_img" src={userObj.avatar_url} style={{width: "100px"}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}
