import React from "react";
import differences from "../../../assets/img/differences/differences.svg";

function Differences() {
  return (
    <div className="differences__container">
      <div className="differences__body">
        <h2 className="differences__title title">What makes us different?</h2>
        <h3 className="differences__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </h3>
        <p className="differences__text">
          Sed ut perspiciatis unde omnis iste natus error sit atem accusantium
          doloremque laudantiu sed ut.
        </p>
        <ul className="differences__list list-differences">
          <li className="list-differences__item">
            10<span>+</span> <p>years</p>
          </li>
          <li className="list-differences__item">
            5k<span>+</span> <p>clients</p>
          </li>
          <li className="list-differences__item">
            20k<span>+</span> <p>Jobs done</p>
          </li>
        </ul>
        <a href="index.html" className="differences__button button">
          Get a free quote
        </a>
      </div>
      <img src={differences} alt="differences" className="differences__image" />
    </div>
  );
}

export default Differences;
