import React, { Component } from "react";
import HeaderNavbar from "../components/Navigation/HeaderNavbar";
import logo from "../assets/img/Logo.svg";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          {/* <Link to="/" className="header__logo">
            <img src={logo} alt="logo" />
          </Link> */}
          <HeaderNavbar />

          <a href="index.html" className="button button_header">
            Get a free quote
          </a>
        </div>
      </header>
    );
  }
}
