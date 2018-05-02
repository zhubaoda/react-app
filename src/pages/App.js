import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>App页面</h2>
                <Link to="/next"><h1>跳转到Next页面</h1></Link> 
            </div>
        );
    }
}