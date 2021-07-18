import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getMovies } from "../../api";
import SeriesList from "./seriesList/SeriesList.jsx";

const Series = () => {
  const [movies, setMovies] = useState();

  const filterYearData = (data) => {
    return data.filter((sampledata) => {
      return sampledata.releaseYear > 2009;
    });
  };

  useEffect(() => {
    getMovies()
      .then((res) => {
        let fData = filterYearData(res.data.entries);
        setMovies(fData);
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
            movies.slice(0, 21).map((product, index) => {
              return (
                <Col
                  key={product.id}
                  lg={3}
                  sm={6}
                  md={4}
                  xl={3}
                  className="mb-4"
                >
                  <SeriesList data={product} />
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
