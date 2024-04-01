import React from "react";

/**
 * News component renders individual news items.
 * @param {object} props - Props containing information about the news item.
 * @param {string} props.id - Unique identifier for the news item.
 * @param {string} props.image - URL of the news image.
 * @param {string} props.title - Title of the news.
 * @param {string} props.description - Description of the news.
 * @param {string} props.source - Source of the news.
 * @param {string} props.url - URL of the full news article.
 * @returns {JSX.Element} - Rendered news item.
 */
function News(props) {
  // Render individual news item
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
