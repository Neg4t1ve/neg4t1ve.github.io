import React from "react";
import areas from "../../../assets/img/areas/areas.svg";

function Areas() {
  return (
    <div className="areas__container">
      <img src={areas} alt="areas" className="areas__image" />
      <div className="areas__content">
        <h2 className="areas__title title">
          We cover all areas of your home or office
        </h2>
        <p className="areas__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <ul className="areas__list areas-list">
          <li className="areas-list__item">Bathrooms</li>
          <li className="areas-list__item">Kitchens</li>
          <li className="areas-list__item">Living Rooms</li>
          <li className="areas-list__item">Carpets</li>
          <li className="areas-list__item">Bedrooms</li>
          <li className="areas-list__item">Offices</li>
          <li className="areas-list__item">Businesses</li>
          <li className="areas-list__item">Windows</li>
        </ul>
        <a href="index.html" className="areas__button button">
          Get a free quote
        </a>
      </div>
    </div>
  );
}

export default Areas;
