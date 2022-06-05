import React, { Component } from "react";
import logo from "../assets/img/Logo.svg";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
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
