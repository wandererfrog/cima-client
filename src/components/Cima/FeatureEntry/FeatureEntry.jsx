import React,{Component} from 'react';

import './Features.css'

export default class FeatureEntry extends Component {

    render() {
        const {icon,title,text} = this.props
        return (
          <div className="col-3">
            <div className="feature-entry-container">
                {icon}
                <div className="feature-entry-title">
                  {title.toUpperCase()}
                </div>
                <div className="feature-entry-text">
                  {text}
                </div>
            </div>
          </div>
        );
    }
}
