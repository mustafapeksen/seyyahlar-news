import React from "react";

function News(props) {
  return (
    <div id={props.id}>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>

      <p>{props.description}</p>
      <p>Kaynak {props.source}</p>
      <a className="news-url" href={props.url}>
        Haberin devamı için tıklayınız...
      </a>
      <hr />
    </div>
  );
}

export default News;
