import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

import './App.css';

class App extends Component {
  render() {
    return (
      
        <Router>
          <div>
            <h1>My first react js programme</h1>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Login'}>Login</Link></li>
            </ul>
            <hr />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Login' component={Login} />
              </Switch>
          </div>
        </Router>  

      );
  }
}

export default App;
