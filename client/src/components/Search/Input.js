import React from "react";

const Input = props => {
  return (
    <div>
      <h5>Input</h5>
      <input
        onChange={props.handleInputChange}
        type="text"
        className="form-control"
        value={props.search}
      />
    </div>
  );
};

export default Input;