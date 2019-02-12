import React from 'react'
import moment from 'moment'

import Graph from './Graph/Graph'
import SelectionGroup from './Selects/SelectionGroup'

import './Search.css'

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
        category : null,
        from : moment(),
        to : moment()
      },
      graphData : null
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
    //Get data from API
    this.setState({
      data : newDataObj
    },()=>{
      console.log(this.state.data);
    })
  }

  getGraphData(){
    const {selection} = this.state

    let requestData = Object.assign({},selection)
    //Transform moment dates into string
    requestData.from = requestData.from.format("YYYY/MM/DDTHH:MM:SS")
    requestData.to = requestData.to.format("YYYY/MM/DDTHH:MM:SS")
    console.log("GraphData for:\n",requestData);
  }

  render(){
    const {selection,data,graphData} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Search</h3>
          </div>
          <div className="col-4">
            <SelectionGroup data={data} selection={selection} onUpdateSelect={this.onUpdateSelect.bind(this)} />
            <button className="search-button" onClick={this.getGraphData.bind(this)}>Search</button>
          </div>
          <div className="col-8">
            <Graph data={graphData} />
          </div>
        </div>
      </div>
    )
  }
}
