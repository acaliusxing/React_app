import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messageArr: [
            {id: "01", title:"Message_01"},
            {id: "02", title:"Message_02"},
            {id: "03", title:"Message_03"},
        ]
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* params */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
                                    {/* search */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
                                    {/* //state */}
                                    <Link replace={true} to={{pathname:`/home/message/detail`, state:{id:msgObj.id, title: msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* params
                <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
                {/* search & state */}
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        )
    }
}
