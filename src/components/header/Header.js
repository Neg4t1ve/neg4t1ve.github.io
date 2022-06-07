import React, { Component } from "react";
import HeaderNavbar from "../Navigation/HeaderNavbar";

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
