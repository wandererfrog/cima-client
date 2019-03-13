import React, { Component } from 'react';
import {Router, Route,Switch } from "react-router-dom";

import './App.css';

import history from './lib/history';

import Topbar from './components/Topbar/Topbar';
import Cima from './components/Cima/Cima';
import Search from './components/Search/Search';
import About from './components/About/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={history}>
      <div className="app-container">
        <Topbar />
        <Switch>
          <Route path="/cima" component={Cima} />
          <Route path="/app" component={Search} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
     </Router>
    );
  }
}

export default App;
