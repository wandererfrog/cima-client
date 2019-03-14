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
    const { data } = this.props;
    if (!data) return <h6>No data selected!</h6>;

    return (
      <div className="graph-container">
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={300}
            data={this.parseGraphData()}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="mean"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Graph;
