import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";

import ToggleData from "../ToggleData/ToggleData";
import "./Graph.css";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        min: true,
        max: true,
        avg: true
      }
    };
  }

  onChange(field) {
    const { filter } = this.state;
    let change = {};

    change[field] = !filter[field];
    let newFilter = Object.assign({}, this.state.filter, change);
    this.setState(Object.assign({}, this.state, { filter: newFilter }));
  }

  prepareData(data) {
    return data.map(d => {
      d.date = d.date.split("T")[0];
      d.min = Math.round(d.min);
      d.max = Math.round(d.max);
      d.mean = Math.round(d.mean);
      return d;
    });
  }

  render() {
    const { data } = this.props;
    const { filter } = this.state;
    if (!data)
      return (
        <div className="search-empty">
          Altere os parâmetros e clique "Pesquisa"
        </div>
      );

    const newData = this.prepareData(data);

    return (
      <div className="graph-container">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={newData}>
            <XAxis dataKey="date" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="max"
              stroke={`${filter.max ? "#e68c47" : "#e9e9e9"}`}
              activeDot={{ r: 1 }}
            />
            <Line
              type="monotone"
              dataKey="min"
              stroke={`${filter.min ? "#bde07d" : "#e9e9e9"}`}
              activeDot={{ r: 1 }}
            />
            <Line
              type="monotone"
              dataKey="mean"
              stroke={`${filter.avg ? "#4787e6" : "#e9e9e9"}`}
              activeDot={{ r: 1 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <ToggleData
          filter={this.state.filter}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

export default Graph;
