import React from 'react'
import history from '../../lib/history'
import './NavBar.css'

export default class Navbar extends React.Component{

  onClick(destination){
    history.replace("/"+destination)
  }

  render(){
    const path = history.location.pathname
    return (
        <div className="navbar-container">
          <div className="navbar-logo">
            <img alt="" src={require('../../assets/cima-logo.png')} className="navbar-logo-img" />
          </div>
          <div className="navbar-item-container">
            <div className="navbar-item" onClick={this.onClick.bind(this,'dashboard')}>
              <i className={`navbar-item-icon fal fa-chart-line ${(path === '/dashboard') ? 'navbar-icon-active' : '' }`}></i>
              <div className={`navbar-item-text ${(path === '/dashboard') ? 'navbar-item-text-active' : '' }`}>Dashboard</div>
            </div>
            <div className="navbar-item" onClick={this.onClick.bind(this,'search')}>
              <i className={`navbar-item-icon fal fa-search ${(path === '/search') ? 'navbar-icon-active' : '' }`}></i>
              <div className={`navbar-item-text ${(path === '/search') ? 'navbar-item-text-active' : '' }`}>Search</div>
            </div>
            <div className="navbar-item" onClick={this.onClick.bind(this,'about')}>
              <i className={`navbar-item-icon fal fa-question-circle ${(path === '/about') ? 'navbar-icon-active' : '' }`}></i>
              <div className={`navbar-item-text ${(path === '/about') ? 'navbar-item-text-active' : '' }`}>About</div>
            </div>
          </div>
        </div>
    )
  }
}
