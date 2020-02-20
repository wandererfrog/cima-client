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
          title="Grupos"
          data={data.groups}
          name="groups"
          selection={selection.groups}
          onUpdateSelect={onUpdateSelect.bind(this)}
        />
        <SelectItem
          title="Especies"
          data={data.species}
          name="species"
          selection={selection.species}
          onUpdateSelect={onUpdateSelect.bind(this)}
        />
        <SelectItem
          title="Variedades"
          data={data.variety}
          name="variety"
          selection={selection.variety}
          onUpdateSelect={onUpdateSelect.bind(this)}
        />
        <SelectItem
          title="Categorias"
          data={data.category}
          name="category"
          selection={selection.category}
          onUpdateSelect={onUpdateSelect.bind(this)}
        />
        <SelectItem
          title="Regiões"
          data={data.region}
          name="region"
          selection={selection.region}
          onUpdateSelect={onUpdateSelect.bind(this)}
        />

        <DatePicker
          selection={selection.from}
          name="from"
          onUpdateSelect={onUpdateSelect.bind(this)}
          title="Desde"
        />
        <DatePicker
          selection={selection.to}
          minimumDate={selection.from}
          name="to"
          onUpdateSelect={onUpdateSelect.bind(this)}
          title="Até"
        />
      </div>
    );
  }
}

export default SelectionGroup;
