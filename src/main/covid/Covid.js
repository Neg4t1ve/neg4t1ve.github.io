import React from "react";
import Call from "../call/Call";
import covid from "../../assets/img/covid/covid.svg";

function Covid() {
  return (
    <div className="covid__container">
      <div className="covid__decor">
        <img src={covid} alt="covid-decor" />
      </div>
      <div className="covid__content">
        <div className="covid__text">
          <h3 className="covid__title-small">Covid-19 sanitization</h3>
          <h2 className="covid__title title_white">
            We follow guidelines to keep you safe from the COVID-19 virus
          </h2>
          <p className="covid__description">
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            sollicitudin congue massa mauris lectus.
          </p>
        </div>
        <div className="covid__action">
          <a href="index.html" className="covid__button button">
            Get a free quote
          </a>
          <div className="covid__call">
            <Call modifier={"_white"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Covid;
