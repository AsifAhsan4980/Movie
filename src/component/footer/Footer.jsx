import React, { Component } from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
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
            <Col sm={6} md={6} lg={4} xl={3}>
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
                  <Link className="text-white" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to="/Movies">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to="/Series">
                    Series
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={4} sm={6} md={4} xl={3}>
              <p>Contact Us</p>
              <div>
                <Link to="/">
                  <AiOutlineFacebook size={24} className="m-1" />
                </Link>
                <Link to="/">
                  <AiOutlineYoutube size={24} className="m-1" />
                </Link>
                <Link to="/">
                  <AiOutlineInstagram size={24} className="m-1" />
                </Link>
                <Link to="/">
                  <AiOutlineTwitter size={24} className="m-1" />
                </Link>
              </div>
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
