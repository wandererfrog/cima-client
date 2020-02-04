import React from "react";

const dataFields = ["min", "max", "avg"];

function ToggleData({ filter, onChange }) {
  return (
    <div className="toggle-data-container">
      {dataFields.map((field, key) => {
        return (
          <button
            key={key}
            className={`${
              filter[field] ? "toggle-data-btn-on" : "toggle-data-btn-off"
            } toggle-data-btn`}
            onClick={() => {
              onChange(field);
            }}
          >
            {field}
          </button>
        );
      })}
    </div>
  );
}

export default ToggleData;
