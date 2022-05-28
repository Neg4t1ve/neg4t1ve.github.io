import React, { Component } from "react";

export default class HeaderNavbar extends Component {
  render() {
    return (
      <nav className="header__menu header-menu">
        <ul className="header-menu__list">
          <li className="header-menu__item">
            <a href="index.html" className="header-menu__link">
              Home
            </a>
          </li>
          <li className="header-menu__item">
            <a href="index.html" className="header-menu__link">
              About
            </a>
          </li>
          <li className="header-menu__item">
            <a href="index.html" className="header-menu__link">
              Services
            </a>
          </li>
          <li className="header-menu__item">
            <a href="index.html" className="header-menu__link">
              Pages
            </a>
          </li>
          <li className="header-menu__item">
            <a href="index.html" className="header-menu__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
