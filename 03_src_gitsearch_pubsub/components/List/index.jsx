import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import './index.css'

export default class List extends Component {

    state = {
        users:[],
        isFirst: true,
        isLoading: false,
        err: "",
    }

    componentDidMount(){
        this.token = PubSub.subscribe('atGit', (_, stateObj) =>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
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
