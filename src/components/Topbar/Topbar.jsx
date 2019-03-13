import React from 'react'
import {withRouter} from 'react-router'

import './Topbar.css'

const mql = window.matchMedia(`(min-width: 800px)`)

class Topbar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      mobile : !mql.matches,
      menuOpen : false
    }
  }


  onClick(destination){
    const {history} = this.props;
    history.push("/"+destination);
    this.toggleMenu()
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged.bind(this));
  }

  componentDidMount() {
    window.addEventListener('scroll',this.stickBar)
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
   this.setState({ mobile: !mql.matches });
 }

 toggleMenu(){
   const collapsable = document.getElementById("topbar-menu-collapsable")

   this.setState({
     menuOpen : !this.state.menuOpen
   },()=>{
     if(collapsable){
       if (this.state.menuOpen) {
        collapsable.classList.remove("topbar-menu-collapsable-closed")
       } else {
        collapsable.classList.add("topbar-menu-collapsable-closed")
        }
     }
   })
 }

  stickBar(){
    const topbar = document.getElementById("topbar")
    const logo = document.getElementById("topbar-logo")

    if(topbar && logo){
      if (window.pageYOffset >= 201) {
       topbar.classList.add("sticky")
       logo.classList.add("sticky-logo")
      } else {
         topbar.classList.remove("sticky");
         logo.classList.remove("sticky-logo")
       }
    }
  }

  render(){
    const {history} = this.props;
    const {mobile} = this.state
    const path = history.location.pathname

    const title = menuItems.find((i)=>{return i.path === path })

    if(path === '/app'){
      return null
    }

    if(!mobile){
      return (
        <div id="topbar" className="topbar-container">
          <div className="topbar-logo" id="topbar-logo">
            <img alt="" src={require('../../assets/cima-logo.png')} className="topbar-logo-img" />
          </div>

          {
            menuItems.map((entry,idx)=>
              (<div
                onClick={this.onClick.bind(this,entry.title)}
                className={`topbar-item-text ${(path === entry.path) ? 'topbar-item-text-active' : '' }`}>
                  {entry.title.toUpperCase()}
              </div>)
            )
          }
        </div>
      )
    }else{
        return(
          <div className="topbar-container--mobile">
            <div className="topbar-menu">
              <div className="topbar-menu-selection">
                <div className="topbar-menu-selected">
                  {title.title.toUpperCase()}
                  <div className="topbar-menu-icon-container" onClick={this.toggleMenu.bind(this)}>
                    <i data-feather="menu" className="topbar-menu-icon"></i>
                  </div>
                </div>
              </div>
              <div className="topbar-menu-collapsable" id="topbar-menu-collapsable">
                {
                  menuItems.map((entry)=>{
                    return (
                      <div className="topbar-menu-item" onClick={this.onClick.bind(this,entry.title)}>
                        {entry.title.toUpperCase()}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        )
      }
  }
}

const menuItems = [
  {title : "cima" , path : "/cima"},
  {title : "app" , path : "/app"},
  {title : "we" , path : "/we"},
  {title : "contact" , path : "/contact"}
]

export default withRouter(Topbar)
