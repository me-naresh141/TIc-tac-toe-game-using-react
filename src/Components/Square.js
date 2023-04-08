import React from "react";

const Square = (props) => {
  return (
    <div>
      <div onClick={props.onClick} className="square" id={props.value}>
        <h1>{props.value}</h1>
      </div>
    </div>
  );
};

export default Square;
