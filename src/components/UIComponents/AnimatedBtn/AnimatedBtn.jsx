import React from 'react'

import './AnimatedBtn.css'

class AnimatedBtn extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      hover : false
    }
  }

  onMouseOver(){
    this.setState({
      hover : true
    })
  }

  onMouseOut(){
    this.setState({
      hover : false
    })
  }

  render(){
    const {title,className,icon} = this.props
    const {hover} = this.state

    return (
      <button
        className={className}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}>
          {title.toUpperCase()}
        <i class={`${icon} animated-btn-icon ${(hover) ? 'animated-btn-hover' : '' }`}></i>
      </button>
    )
  }
}

export default AnimatedBtn;
