import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AiOutlineMenu, AiTwotoneBell } from "react-icons/ai";
export default class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" className="shadow mb-5 bg-white rounded ">
        <Navbar.Brand href="#home">
          <AiOutlineMenu style={{ fontSize: "20px" }} className="text-dark" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto mr-3">
            <Nav.Link href="#home">
              <AiTwotoneBell
                className="text-dark"
                style={{ fontSize: "20px" }}
              />
            </Nav.Link>
            <NavDropdown
              title="Madhu"
              id="basic-nav-dropdown"
              className="text-dark"
            ></NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
