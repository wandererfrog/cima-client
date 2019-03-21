import React, { Component } from "react";
import {
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "./Graph.css";

class Graph extends Component {
  render() {
    let { data } = this.props;
    if (!data) return <h6>No data selected!</h6>;

    data = data.map(d => {
      d.date = d.date.split("T")[0];
      return d;
    });
    return (
      <div className="graph-container">
        <ResponsiveContainer width={700}>
          <LineChart
            width={"100%"}
            height={"100%"}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />

            <Line
              type="monotone"
              dataKey="max"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="mean"
              stroke="#cf6dcd"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="min"
              stroke="#ff7887"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Graph;
