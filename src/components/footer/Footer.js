import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.svg";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__bot">
            <Link to="/" className="header__logo footer__logo">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="footer__rights">
              <p>
                Copyright © Cleaning X | Designed by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://brixtemplates.com/"
                >
                  BRIX Templates
                </a>
              </p>
              <p>
                - Powered by{" "}
                <a target="_blank" rel="noreferrer" href="https://webflow.com/">
                  Webflow
                </a>
              </p>
              <p>
                -{" "}
                <a target="_blank" rel="noreferrer" href="https://webflow.com/">
                  Licenses
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
