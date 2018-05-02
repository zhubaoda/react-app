import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Next extends Component {
    render() {
        return (
            <div>
                <h1>Next页面</h1>
                <Link to="/"><h1>跳转到App页面</h1></Link> 
            </div>
        );
    }
}