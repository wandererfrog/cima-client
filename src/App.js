import React, { Component } from 'react';
import {Router, Route,Switch } from "react-router-dom";
import Sidebar from "react-sidebar";

import './App.css';
import styles from './styles/sidebar'

import history from './lib/history'

import BurguerMenu from './components/BurguerMenu/BurguerMenu'
import Dashboard from './components/Dashboard/Dashboard'
import Search from './components/Search/Search'
import About from './components/About/About'

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  toggleMenu(){
    this.setState({
      sidebarOpen : !this.state.sidebarOpen
    })
  }

  render() {
    return (
      <Router history={history}>
        <Sidebar
          sidebar={<BurguerMenu />}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          styles={styles}
        >
          <Switch>
            {
              (!this.state.sidebarDocked ) ?
              <i onClick={this.toggleMenu.bind(this)} className={`fal ${(this.state.sidebarOpen) ? 'fa-times' : 'fa-align-left'} menu-toggle-btn`}></i> : null
            }
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About} />
          </Switch>
        </Sidebar>
     </Router>
    );
  }
}

export default App;
