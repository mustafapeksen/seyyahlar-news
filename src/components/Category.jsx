import React from "react";

function Category(props) {
  return <button onClick={props.tag}>{props.name}</button>;
}

export default Category;
