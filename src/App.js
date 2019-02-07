import React, { Component } from 'react';
import {Router, Route,Switch } from "react-router-dom";
import './App.css';

import history from './lib/history'
import NavBar from './components/NavBar/NavBar'
import Dashboard from './components/Dashboard/Dashboard'
import Search from './components/Search/Search'
import About from './components/About/About'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
     </Router>
    );
  }
}

export default App;
