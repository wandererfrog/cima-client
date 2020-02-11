import React, { Component } from "react";
import feather from "feather-icons";
import "./Features.css";

export default class FeatureEntry extends Component {
  componentDidMount() {
    feather.replace();
  }
  render() {
    const { icon, title, text } = this.props;
    return (
      <div className="col-4">
        <div className="feature-entry-container">
          <i className="feature-icon" data-feather={`${icon}`}></i>
          <div className="feature-entry-title">{title.toUpperCase()}</div>
          <div className="feature-entry-text">{text}</div>
        </div>
      </div>
    );
  }
}
