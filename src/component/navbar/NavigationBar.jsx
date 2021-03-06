import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../App.css";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <Navbar bg="light" fixed="top" expand="lg">
            <Link to="/">
              <Navbar.Brand>
                <img
                  src={logo}
                  height="30"
                  className="d-inline-block align-top m-2"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Link>
            <div>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                ></Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
      </>
    );
  }
}

export default NavigationBar;
