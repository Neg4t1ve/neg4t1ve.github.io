import React from "react";

function ArticlesCard(props) {
  return (
    <div className="articles__card card">
      <div className="card__body">
        <img src={props.cardImage} alt="card" className="card__image" />
        <div className="card__title">{props.cardTitle}</div>
        <div className="card__text">{props.cardText}</div>
      </div>
      <div className="card__footer">
        <div className="card__date">{props.cardDate}</div>
        <div className="card__decor"></div>
      </div>
    </div>
  );
}

export default ArticlesCard;
