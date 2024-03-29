import React from "react";

function Paging(props) {
  return (
    <div className="paging">
      <p onClick={props.minus}>-</p>
      <p>{props.number}</p>
      <p onClick={props.plus}>+</p>
    </div>
  );
}

export default Paging;
