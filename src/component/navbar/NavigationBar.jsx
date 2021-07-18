import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../App.css";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <Navbar
            fixed="top"
            sm={12}
            md={8}
            lg={12}
            xl={12}
            bg="white"
            variant="light"
          >
            <Container fluid>
              <Row className="mr-5">
                <Col>
                  <Navbar.Brand href="/">
                    <img
                      src={logo}
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </Navbar.Brand>
                </Col>
              </Row>
              <Nav className="mr-auto">
                <Nav.Link className="mr-4" href="/">
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link className="mr-4">
                  <Link to="/Series">Series</Link>
                </Nav.Link>
                <Nav.Link className="mr-4">
                  <Link to="/Movies">Movies</Link>
                </Nav.Link>
              </Nav>
              <Nav className="mr-auto"></Nav>
              <Row>
                <Col>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="mr-4"
                      aria-label="Search"
                    />
                    <Button className="ml-2" variant="outline-success">
                      Search
                    </Button>
                  </Form>
                </Col>
              </Row>

              <Nav className="mr-auto"></Nav>
              <Row>
                <Col>
                  <Button className="btn btn-md" variant="outline-success">
                    Log In
                  </Button>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}

export default NavigationBar;
