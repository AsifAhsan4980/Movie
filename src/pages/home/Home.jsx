import Product from "./product/Product.jsx";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";

const Home = () => {
  const cardInfo = [
    {
      id: 1,
      name: "Movies",
      descrption: "Here is the Movie List",
      image: "https://images.303magazine.com/uploads/2012/07/Film-Reel1.jpg",
    },
    {
      id: 2,
      name: "Series",
      descrption: "here is the Series List",
      image:
        "https://pbblogassets.s3.amazonaws.com/uploads/2017/10/25101643/film-grain-cover.jpg",
    },
  ];
  return (
    <main className="Background">
      <br />
      <br />
      <br />
      <Container fluid>
        <Row>
          {cardInfo.map((product, index) => {
            return (
              <Col
                key={product.id}
                lg={3}
                sm={6}
                md={4}
                xl={3}
                className="mb-4"
              >
                <Product data={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <br />
    </main>
  );
};

export default Home;
