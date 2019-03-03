import React from 'react'
import {withRouter} from 'react-router'

import './Topbar.css'

class Topbar extends React.Component{

  onClick(destination){
    const {history} = this.props;
    history.push("/"+destination)
  }

  componentDidMount() {
    window.addEventListener('scroll',this.stickBar)
  }

  stickBar(){
    const topbar = document.getElementById("topbar")
    const logo = document.getElementById("topbar-logo")

    if (window.pageYOffset >= 201) {
     topbar.classList.add("sticky")
     logo.classList.add("sticky-logo")
   } else {
     topbar.classList.remove("sticky");
     logo.classList.remove("sticky-logo")
   }
  }

  render(){
    const {history} = this.props;
    const path = history.location.pathname

    return (
      <div id="topbar" className="topbar-container">
        <div
          onClick={this.onClick.bind(this,'cima')}
          className={`topbar-item-text ${(path === '/cima') ? 'topbar-item-text-active' : '' }`}>
            {"cima".toUpperCase()}
        </div>
        <div
          onClick={this.onClick.bind(this,'app')}
          className={`topbar-item-text ${(path === '/app') ? 'topbar-item-text-active' : '' }`}>
            {"app".toUpperCase()}
        </div>
        <div className="topbar-logo" id="topbar-logo">
          <img alt="" src={require('../../assets/cima-logo.png')} className="topbar-logo-img" />
        </div>
        <div
          onClick={this.onClick.bind(this,'we')}
          className={`topbar-item-text ${(path === '/we') ? 'topbar-item-text-active' : '' }`}>
            {"we".toUpperCase()}
        </div>
        <div
          onClick={this.onClick.bind(this,'contact')}
          className={`topbar-item-text ${(path === '/contact') ? 'topbar-item-text-active' : '' }`}>
          {"contact".toUpperCase()}
        </div>
      </div>
    )
  }
}

export default withRouter(Topbar)
