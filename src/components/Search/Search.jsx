import React from "react";

import Graph from "./Graph/Graph";
import SelectionGroup from "./Selects/SelectionGroup";
import Table from "./Table/Table";

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
    if (groups) {
      this.setState({
        data: {
          groups: groups.map(g => ({ value: g.id, label: g.name }))
        }
      });
    }
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
    this.setState({
      graphData: cotas
    });
  }

  render() {
    const { selection, data, graphData } = this.state;

    return (
      <div className="container search-container">
        <img
          className="search-logo"
          src={require("../../assets/cima-logo.png")}
        />
        <div className="row">
          <div className="col-12">
            <h3>Pesquisa</h3>
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
              Pesquisa
            </button>
          </div>
          <div className="col-8">
            <Graph data={graphData} />
          </div>
        </div>
        <Table data={graphData} selection={selection} />
      </div>
    );
  }
}
