import React from "react";
import schedule from "../../../assets/img/description/schedule.svg";
import payment from "../../../assets/img/description/payment.svg";
import cleaning from "../../../assets/img/description/cleaning.svg";

function Description() {
  return (
    <div className="description__container">
      <div className="description__header">
        <h2 className="description__title title">How our service works?</h2>
        <p className="description__text">
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
      </div>
      <ul className="description__content">
        <li className="description__column column__description">
          <img src={schedule} alt="schedule" />
          <h3 className="column-description__title">1. Schedule online</h3>
          <p className="column-description__text">
            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
            sed n.
          </p>
        </li>
        <li className="description__column column__description">
          <img src={payment} alt="payment" />
          <h3 className="column-description__title">2. Pay online easily</h3>
          <p className="column-description__text">
            Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
            at nunc.
          </p>
        </li>
        <li className="description__column column__description">
          <img src={cleaning} alt="cleaning" />
          <h3 className="column-description__title">
            3. Get your house cleaned
          </h3>
          <p className="column-description__text">
            Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus
            eleifend.
          </p>
        </li>
      </ul>
      <div className="description__action">
        <a href="index.html" className="description__button button">
          Get a free quote
        </a>
        <a href="index.html" className="description__button button_white">
          Explore services
        </a>
      </div>
    </div>
  );
}

export default Description;
