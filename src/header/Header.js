import React, { Component } from "react";
import HeaderNavbar from "./HeaderNavbar";
import logo from "../assets/img/Logo.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <a href="index.html" className="header__logo">
            <img src={logo} alt="logo" />
          </a>
          <HeaderNavbar />

          <a href="index.html" className="button button_header">
            Get a free quote
          </a>
        </div>
      </header>
    );
  }
}
