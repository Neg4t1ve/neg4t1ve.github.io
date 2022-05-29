import React, { Component } from "react";
import logo from "../assets/img/Logo.svg";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__body">
            <div className="footer__info">
              <h3 className="footer__title title">
                Quality cleaning for your home
              </h3>
              <p className="footer__text">
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </p>
            </div>
            <div className="footer__contacts">
              <h4 className="footer__subtitle">Contact us</h4>
              <a href="index.html" className="footer__text">
                1827 Nickel Road, Los Angeles, CA, 90017, United States
              </a>
              <a href="tel:4145672109" className="footer__text">
                (414) 567 - 2109
              </a>
              <a href="mailto:contact@cleaning.com" className="footer__text">
                contact@cleaning.com
              </a>
            </div>
            <div className="footer__hours">
              <h4 className="footer__subtitle">Hours</h4>
              <p className="footer__subtitle-small">Monday to Friday</p>
              <p className="footer__text">6:00 AM - 9:00 PM</p>
              <p className="footer__subtitle-small ">Saturday & Sunday</p>
              <p className="footer__text">8:00 AM - 8:00 PM</p>
            </div>
            <div className="footer__estimate">
              <h4 className="footer__subtitle">Get a free estimate</h4>
              <a href="tel:4145672109" className="call__phone_blue">
                (414) 567 - 2109
              </a>
              <p className="footer__text">
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <a href="index.html" className="footer__button button">
                Request a free quote
              </a>
            </div>
          </div>
          <div className="footer__bot">
            <a href="index.html" className="header__logo">
              <img src={logo} alt="Logo" />
            </a>
            <div className="footer__rights">
              <p>
                Copyright © Cleaning X | Designed by{" "}
                <a href="index.html">BRIX Templates</a>
              </p>
              <p>
                - Powered by <a href="index.html">Webflow</a>
              </p>
              <p>
                - <a href="index.html">Licenses</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
