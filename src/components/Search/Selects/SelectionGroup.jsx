import React, { Component } from "react";

import SelectItem from "./SelectItem";
import DatePicker from "./DatePicker/DatePicker";

import "./Selects.css";

class SelectionGroup extends Component {
  render() {
    const { selection, data, onUpdateSelect } = this.props;
    return (
      <div>
        <SelectItem
          title="Groups"
          data={data.groups}
          name="groups"
          selection={selection.groups}
          onUpdateSelect={onUpdateSelect.bind(this)}
        />
        <SelectItem
          title="Species"
          data={data.species}
          name="species"
          selection={selection.species}
          onUpdateSelect={onUpdateSelect.bind(this)}
        />
        <SelectItem
          title="Variety"
          data={data.variety}
          name="variety"
          selection={selection.variety}
          onUpdateSelect={onUpdateSelect.bind(this)}
        />
        <SelectItem
          title="Category"
          data={data.category}
          name="category"
          selection={selection.category}
          onUpdateSelect={onUpdateSelect.bind(this)}
        />
        <SelectItem
          title="Region"
          data={data.region}
          name="region"
          selection={selection.region}
          onUpdateSelect={onUpdateSelect.bind(this)}
        />

        <DatePicker
          selection={selection.from}
          name="from"
          onUpdateSelect={onUpdateSelect.bind(this)}
          title="From"
        />
        <DatePicker
          selection={selection.to}
          minimumDate={selection.from}
          name="to"
          onUpdateSelect={onUpdateSelect.bind(this)}
          title="To"
        />
      </div>
    );
  }
}

export default SelectionGroup;
