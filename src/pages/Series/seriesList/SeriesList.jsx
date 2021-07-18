import React from "react";
import {
  AiOutlineLike,
  AiOutlineShoppingCart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import "../../../App.css";

const SeriesList = ({ data }) => {
  return (
    <Card sm={6} md={6} lg={4} xl={3} style={{ width: "18rem" }} key={data.id}>
      <Card.Img
        variant="top"
        className="cart_image"
        src={data.images["Poster Art"].url}
      />
      <Card.Body>
        <Card.Title>
          {data.title}({data.releaseYear})
        </Card.Title>
        <Badge bg="secondary">{data.programType}</Badge>
        <Card.Text className="text-justify bodysize textlimit">
          {data.description}
        </Card.Text>
        <Row>
          <Col className="text-center text-lg">
            <Button variant="light">
              <AiOutlineLike size={24} />
            </Button>
          </Col>
          <Col className="text-center">
            <Button variant="light">
              <AiOutlineShareAlt size={24} />
            </Button>
          </Col>
          <Col className="text-center">
            <Button variant="light">
              <AiOutlineShoppingCart size={24} />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SeriesList;
