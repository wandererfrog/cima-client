import React from 'react'
import SelectionGroup from './Selects/SelectionGroup'

import {onUpdateGetKeyList} from '../../lib/selects'

export default class Search extends React.Component{

  constructor(props){
    super(props)
    this.state={
      data : {
        groups : [
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ],
        species : null,
        region : null,
        market: null,
        variety : null,
        category : null
      },
      selection : {
        groups :null,
        species : null,
        region : null,
        market : null,
        variety : null,
        category : null
      }
    }
  }

  onUpdateSelect(name,evt){
    const newSelection = Object.assign({},this.state.selection)
    newSelection[name] = evt

    this.setState({
      selection : newSelection
    },()=>{
      this.updateData(name)
    })
  }

  updateData(name){
    const newDataObj = onUpdateGetKeyList(name,this.state.data)
    console.log(newDataObj);
    //Get data from API
    this.setState({
      data : newDataObj
    },()=>{
      console.log(this.state.data);
    })
  }

  render(){
    const {selection,data} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Search</h3>
          </div>
          <div className="col-6">
            <SelectionGroup data={data} selection={selection} onUpdateSelect={this.onUpdateSelect.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}
