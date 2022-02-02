import React, { useState } from "react";

function Input(props) {
  return (
    <div className="form">
      <input onChange={props.change} type="text" value={props.text} />
      <button className="Add" onClick={props.add}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
