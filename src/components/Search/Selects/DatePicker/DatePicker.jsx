import React, { Component } from "react";
import "./DatePicker.css";

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  toggleFocused() {
    this.setState({
      focused: !this.state.focused
    });
  }

  render() {
    const { selection, onUpdateSelect, title, name } = this.props;
    console.log(selection);
    return (
      <div className="select-container">
        <div className="select-title">{title}</div>
        <input
          type="date"
          className="date-picker"
          value={selection}
          onChange={date => onUpdateSelect(name, date)}
        />
      </div>
    );
  }
}

export default DatePicker;
