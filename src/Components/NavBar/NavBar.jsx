import React from "react";
import "./NavBar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import flagWheel from "../../svg/flag_wheel_svg.svg";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="sm"
      className="navbar-container p-3"
      variant="light"
      fixed="top"
      style={{ background: "linear-gradient(green, white, orange )" }}
    >
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="ms-4 me-4 display-1">
          Covid Data
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/"  className="me-0" id="home-btn">
              Home
            </Nav.Link>
          </Nav>
          <Nav
            id="flag-wheel"
            className="me-5"
            style={
              window.innerWidth < 780
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <img src={flagWheel} alt="flag-wheel" width={50} />
          </Nav>
          <Nav.Link
            href="https://github.com/Sainadh1205"
            target="_blank"
            className="ms-5 me-5"
          >
            <h1>Dileep</h1>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
