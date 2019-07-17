import React, { Component } from 'react';

import SelectItem from './SelectItem'
//import DatePicker from './DatePicker'
import moment from 'moment';

import './Selects.css'

class SelectionGroup extends Component {
  
  updateDate(name,evt){
    const {onUpdateSelect} = this.props;
    onUpdateSelect(name,moment(evt.target.value));
  }

  render() {
    const {selection,data,onUpdateSelect} = this.props
    return (
      <div>
        <SelectItem title="Groups" data={data.groups} name="groups" selection={selection.groups} onUpdateSelect={onUpdateSelect.bind(this)} />
        <SelectItem title="Species" data={data.species} name="species" selection={selection.species} onUpdateSelect={onUpdateSelect.bind(this)} />
        <SelectItem title="Variety" data={data.variety} name="variety" selection={selection.variety} onUpdateSelect={onUpdateSelect.bind(this)} />
        <SelectItem title="Category" data={data.category} name="category" selection={selection.category} onUpdateSelect={onUpdateSelect.bind(this)} />
        <SelectItem title="Region" data={data.region} name="region" selection={selection.region} onUpdateSelect={onUpdateSelect.bind(this)} />
        
        {/* <DatePicker selection={selection.from} name="from" onUpdateSelect={onUpdateSelect.bind(this)} title="From" />
        <DatePicker selection={selection.to} minimumDate={selection.from} name="to" onUpdateSelect={onUpdateSelect.bind(this)} title="To" /> */}
        <div className="select-title">{"From"}</div>
        <input className="date-input" id="date" name="from" type="date" value={selection.from.format("YYYY-MM-DD")} onChange={this.updateDate.bind(this,"from")} title="From"/>
        <div className="select-title">{"To"}</div>
        <input className="date-input" id="date" name="to" type="date" value={selection.to.format("YYYY-MM-DD") } onChange={onUpdateSelect.bind(this,"to",this.value)} title="To" />
      </div>
    );
  }

}

export default SelectionGroup;
