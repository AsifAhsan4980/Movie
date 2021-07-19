import React, { useEffect, useState } from "react";
import MovieList from "./movielist/MovieList";
import { Container, Row, Col } from "react-bootstrap";
import { getMovies } from "../../api";

const Series = () => {
  const [movies, setMovies] = useState();
  const filterYearData = (data) => {
    return data.filter((sampledata) => {
      return sampledata.releaseYear > 2009;
    });
  };

  const shortDataAlpha = (data) => {
    return data.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  };

  const movieOnlyFilter = (data) => {
    return data.filter((sampledata) => {
      return sampledata.programType === "movie";
    });
  };

  useEffect(() => {
    getMovies()
      .then((res) => {
        let filterData = filterYearData(res.data.entries);
        let shortData = shortDataAlpha(filterData);
        let MovieFilter = movieOnlyFilter(shortData);
        setMovies(MovieFilter);
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
                <Col key={index} sm={6} md={6} lg={4} xl={3} className="mb-4">
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
