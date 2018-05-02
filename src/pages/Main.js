import React,{Component} from 'react';
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
            <Route path="/Next" component={Next}/>
        </div>
    </Router>
)

const App = () => (
    <div>
        <h2>App页</h2>
    </div>
)

const Next = () => (
    <div>
        <h2>Next页面</h2>
    </div>
)

export default Main
