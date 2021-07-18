import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../../../App.css";

const Product = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }} key={data.id}>
      <Card.Img variant="top" className="cart_image" src={data.image} />
      <Card.Body>
        <Link to={clickhander(data.id)}>
          <Card.Title>{data.name}</Card.Title>
        </Link>
        <Card.Text className="text-justify bodysize textlimit">
          {data.descrption}
        </Card.Text>
      </Card.Body>
    </Card>
  );
  function clickhander(id) {
    if (id === 1) {
      return "/Movies";
    } else {
      return "/Series";
    }
  }
};

export default Product;
