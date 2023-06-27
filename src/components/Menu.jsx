import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} eventKey="1" to="/">
              home
            </Nav.Link>

            <Nav.Link as={Link} eventKey="2" to="/about">
              about
            </Nav.Link>

            <Nav.Link as={Link} eventKey="3" to="/services">
              services
            </Nav.Link>

            <Nav.Link as={Link} eventKey="4" to="/portfolio">
              portfolio
            </Nav.Link>

            <Nav.Link as={Link} eventKey="5" to="/contact">
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
