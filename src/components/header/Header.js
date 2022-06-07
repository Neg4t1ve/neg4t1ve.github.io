import React, { Component } from "react";
import HeaderNavbar from "../Navigation/HeaderNavbar";
import logo from "../../assets/img/Logo.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <HeaderNavbar />

          <a href="index.html" className="button button_header">
            Get a free quote
          </a>
        </div>
      </header>
    );
  }
}
