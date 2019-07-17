import React, { Component } from 'react';
import Select from 'react-select';



class SelectItem extends Component {

    render() {
      const {title,data,name,onUpdateSelect,selection} = this.props
      return (
        <div className="select-container col-4">
          <div className="select-title">{title}</div>
          <Select
            value={selection}
            onChange={onUpdateSelect.bind(this,name)}
            options={data || []}
          />
        </div>
      );
    }

}

export default SelectItem;
