import React, { Component } from "react";
import house from "../../assets/img/services/house.svg";
import office from "../../assets/img/services/office.svg";
import industrial from "../../assets/img/services/industrial.svg";

export default class Services extends Component {
  render() {
    return (
      <div className="services__container">
        <div className="services__header">
          <h3 className="services__title title">
            Take a look at our professional services
          </h3>
          <a href="index.html" className="services__button button_white">
            Explore services
          </a>
        </div>
        <div className="services__body">
          <ul className="services__list">
            <li className="services__card services-card">
              <img src={house} alt="house" className="services-card__image" />
              <div className="services-card__text">
                <h3 className="services-card__title">House cleaning</h3>
                <p className="services-card__description">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </li>
            <li className="services__card services-card">
              <img src={office} alt="office" className="services-card__image" />
              <div className="services-card__text">
                <h3 className="services-card__title">Office cleaning</h3>
                <p className="services-card__description">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </li>
            <li className="services__card services-card">
              <img
                src={industrial}
                alt="industrial"
                className="services-card__image"
              />
              <div className="services-card__text">
                <h3 className="services-card__title">Industrial cleaning</h3>
                <p className="services-card__description">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
