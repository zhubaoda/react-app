import React,{Component} from 'react';
import App from './App';
import Next from './Next'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom'

const Main = () => (
   <Router>
        <div>
            <div>hahhahahhah</div>
            <hr/>
            <Route exact path="/" component={App}/>
            <Route path="/next" component={Next}/>
        </div>
    </Router>
)


export default Main
