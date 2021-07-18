import React, { Component } from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        {" "}
        <Container fluid className="bg-dark">
          <br /> <br /> <br />
          <Row className="justify-content-md-center text-light text-white">
            <Col lg={4} sm={6} md={4} xl={3}>
              <Media>
                <img
                  className="mr-2"
                  src={logo}
                  width={200}
                  alt="Generic placeholder"
                />
              </Media>
              <div>
                <p>Yea Khaja BHaban, Mirpur 1 Dhaka</p>
              </div>
            </Col>
            <Col lg={4} sm={6} md={4} xl={3}>
              <h4>Navigation</h4>
              <ul className="hidebullets ">
                <li>
                  <a href="./index.html" className="text-white">
                    Homepage
                  </a>
                </li>
                <li>
                  <a href="./about.html" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="./contact.html" className="text-white">
                    Contac Us
                  </a>
                </li>
                <li>
                  <a href="./cart.html" className="text-white">
                    Your Cart
                  </a>
                </li>
                <li>
                  <a href="./register.html" className="text-white">
                    Login
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={4} sm={6} md={4} xl={3}>
              <h4>My Account</h4>
              <ul className="hidebullets ">
                <li>
                  <a href="cd" className="text-white">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="efe" className="text-white">
                    Order History
                  </a>
                </li>
                <li>
                  <a href="ff" className="text-white">
                    Wish List
                  </a>
                </li>
                <li>
                  <a href="vv" className="text-white">
                    Newsletter
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={4} sm={6} md={4} xl={3}>
              <p>I am the best</p>
              <br />
              <ul className="hidebullets ">
                <li>
                  <a href="cd" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="efe" className="text-white">
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="ff" className="text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="vv" className="text-white">
                    Whatsapp
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <br /> <br /> <br /> <br /> <br /> <br />
        </Container>
        <div className="text-center">
          <b>© All Right reserved to Asif Ahsan</b>
        </div>
      </div>
    );
  }
}

export default Footer;
