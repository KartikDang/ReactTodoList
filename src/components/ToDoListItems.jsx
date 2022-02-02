import React, { useState } from "react";

function Items(props) {
  var [state, setState] = useState(false);

  function handleClick() {
    setState((prev) => {
      return !prev;
    });
  }

  var customStyles = {
    float: "right",
    marginRight: "10px"
  };
  return (
    <li>
      <span
        style={state ? { textDecoration: "line-through" } : null}
        onClick={handleClick}
      >
        {" "}
        {props.name}{" "}
      </span>
      <button
        className="Add"
        style={customStyles}
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        <span>Del</span>
      </button>
    </li>
  );
}

export default Items;
