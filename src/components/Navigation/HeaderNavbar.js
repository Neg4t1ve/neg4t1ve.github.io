import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../assets/img/Logo.svg";

export default class HeaderNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Container className="d-flex bd-highlight mb-3">
          <Navbar.Brand as={Link} to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0 p-2 bd-highlight">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="About">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      // {/* <nav className="header__menu header-menu">
      //   <ul className="header-menu__list">
      //     <li className="header-menu__item">
      //       <Link to="/" className="header-menu__link">
      //         Home
      //       </Link>
      //     </li>
      //     <li className="header-menu__item">
      //       <Link to="About" className="header-menu__link">
      //         About
      //       </Link>
      //     </li>
      //     <li className="header-menu__item">
      //       <Link to="Services" className="header-menu__link">
      //         Services
      //       </Link>
      //     </li>
      //     <li className="header-menu__item">
      //       <Link to="Pages" className="header-menu__link">
      //         Pages
      //       </Link>
      //     </li>
      //     <li className="header-menu__item">
      //       <Link to="Contact" className="header-menu__link">
      //         Contact
      //       </Link>
      //     </li>
      //   </ul>
      // </nav> */}
    );
  }
}
