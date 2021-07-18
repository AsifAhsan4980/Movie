import React, { useEffect, useState } from "react";
import MovieList from "./movielist/MovieList";
import { Container, Row, Col } from "react-bootstrap";
import { getMovies } from "../../api";

const Series = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getMovies()
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <main className="Background">
      <br />
      <br />
      <br />
      <Container fluid>
        <Row>
          {movies &&
            movies.entries.map((product, index) => {
              return (
                <Col
                  key={product.id}
                  lg={3}
                  sm={6}
                  md={4}
                  xl={3}
                  className="mb-4"
                >
                  <MovieList data={product} />
                </Col>
              );
            })}
        </Row>
      </Container>
      <br />
    </main>
  );
};

export default Series;
