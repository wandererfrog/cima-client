import React from "react";

import Graph from "./Graph/Graph";
import SelectionGroup from "./Selects/SelectionGroup";

import "./Search.css";

import * as apiCalls from "../../lib/api";
import { onUpdateGetKeyList } from "../../lib/selects";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        groups: [],
        species: null,
        region: null,
        market: null,
        variety: null,
        category: null
      },
      selection: {
        groups: null,
        species: null,
        region: null,
        market: null,
        variety: null,
        category: null,
        from: "2018-01-01",
        to: "2020-01-01"
      },
      graphData: null
    };
  }

  async componentDidMount() {
    const groups = await apiCalls.getGroups();
    this.setState({
      data: {
        groups: groups.map(g => ({ value: g.id, label: g.name }))
      }
    });
  }

  onUpdateSelect(name, evt) {
    const newSelection = Object.assign({}, this.state.selection);

    if (name === "from" || name === "to") {
      newSelection[name] = evt.target.value;
    } else {
      newSelection[name] = evt;
    }

    this.setState(
      {
        selection: newSelection
      },
      () => {
        this.updateData(name);
      }
    );
  }

  async updateData(name) {
    const { selection, data } = this.state;
    const newStateObj = await onUpdateGetKeyList(name, selection, data);
    //Get data from API
    console.log("State:", newStateObj);
    this.setState(newStateObj);
  }

  async getGraphData() {
    const { selection } = this.state;

    if (
      !selection.from ||
      !selection.to ||
      !selection.groups ||
      !selection.species
    )
      return;

    const cotas = await apiCalls.getCotas(selection);

    console.log(cotas);

    this.setState({
      graphData: cotas
    });
  }

  render() {
    const { selection, data, graphData } = this.state;
    return (
      <div className="container search-container">
        <div className="row">
          <div className="col-12">
            <h3>Search</h3>
          </div>
          <div className="col-4">
            <SelectionGroup
              data={data}
              selection={selection}
              onUpdateSelect={this.onUpdateSelect.bind(this)}
            />
            <button
              className="search-button"
              onClick={this.getGraphData.bind(this)}
            >
              Search
            </button>
          </div>
          <div className="col-8">
            <Graph data={graphData} />
          </div>
        </div>
      </div>
    );
  }
}
