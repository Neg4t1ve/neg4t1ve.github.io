import React from "react";
import ArticlesCard from "./ArticlesCard";
import firstcard from "../../assets/img/articles/01.svg";
import secondcard from "../../assets/img/articles/02.svg";

function Articles() {
  return (
    <div className="articles__container">
      <div className="articles__header articles-header">
        <div className="articles-header__text">
          <h2 className="articles-header__title title">Articles & resources</h2>
          <p className="articles-header__subtitle">
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            sollicitudin congue massa mauris lectus.
          </p>
        </div>
        <div className="articles-header__buttons">
          <a href="index.html" className="articles-header__button button">
            Get a free quote
          </a>
          <a href="index.html" className="articles-header__button button_white">
            Browse articles
          </a>
        </div>
      </div>
      <div className="articles__body">
        <ArticlesCard
          cardImage={firstcard}
          cardTitle={
            "8 best vacuum cleaners to clean any mess for your home in 2022"
          }
          cardText={
            "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males."
          }
          cardDate={"Jan 28, 2022"}
        />
        <ArticlesCard
          cardImage={secondcard}
          cardTitle={
            "How to properly disinfect your phone and other electronics"
          }
          cardText={
            "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males."
          }
          cardDate={"Feb 1, 2022"}
        />
      </div>
    </div>
  );
}

export default Articles;
