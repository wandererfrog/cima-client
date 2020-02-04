import React, { Component } from "react";
import Select from "react-select";

class SelectItem extends Component {
  render() {
    const { title, data, name, onUpdateSelect, selection } = this.props;
    return (
      <div className="select-container">
        <div className="select-title">{title}</div>
        <Select
          className="react-select-container"
          value={selection}
          onChange={onUpdateSelect.bind(this, name)}
          options={data || []}
        />
      </div>
    );
  }
}

export default SelectItem;
