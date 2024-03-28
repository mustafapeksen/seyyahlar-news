import React from "react";

function News(props) {
  return (
    <div key={props.key}>
      <h2>{props.title}</h2>
      <img src={props.image} alt="" />
      <p>{props.description}</p>
      <p>Kaynak {props.source}</p>
      <a href={props.url}>Haberin devamı için tıklayınız...</a>
      <hr />
    </div>
  );
}

export default News;
