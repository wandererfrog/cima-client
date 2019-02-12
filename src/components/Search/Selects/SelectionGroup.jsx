import React, { Component } from 'react';
import SelectItem from './SelectItem'
import './Selects.css'

class SelectionGroup extends Component {

  render() {
    const {selection,data,onUpdateSelect} = this.props
    return (
      <div>
        <SelectItem title="Groups" data={data.groups} name="groups" selection={selection.groups} onUpdateSelect={onUpdateSelect.bind(this)} />
        <SelectItem title="Species" data={data.species} name="species" selection={selection.species} onUpdateSelect={onUpdateSelect.bind(this)} />
        <SelectItem title="Variety" data={data.variety} name="variety" selection={selection.species} onUpdateSelect={onUpdateSelect.bind(this)} />
        <SelectItem title="Category" data={data.category} name="category" selection={selection.species} onUpdateSelect={onUpdateSelect.bind(this)} />
        <SelectItem title="Region" data={data.region} name="region" selection={selection.species} onUpdateSelect={onUpdateSelect.bind(this)} />
      </div>
    );
  }

}

export default SelectionGroup;
