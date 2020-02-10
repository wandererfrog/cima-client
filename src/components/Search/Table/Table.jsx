import React from "react";
import "./Table.css";

function Table({ data, selection }) {
  const title = `${selection.groups ? selection.groups.label : ""} - ${
    selection.species ? selection.species.label : ""
  } `;

  if (!data) return null;

  return (
    <div className="row">
      <div className="col-12">
        <h5>Results - {title} </h5>
        <table>
          <thead>
            <tr>
              <th className="cima-table-data">Data</th>
              <th className="cima-table-data">Min</th>
              <th className="cima-table-data">Mean</th>
              <th className="cima-table-data">Max</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <TableRow data={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableRow({ data }) {
  return (
    <tr>
      <td className="cima-table-data">{data.date}</td>
      <td className="cima-table-data">{data.min}</td>
      <td className="cima-table-data">{data.mean}</td>
      <td className="cima-table-data">{data.max}</td>
    </tr>
  );
}

export default Table;
