import { useEffect, useState } from "react";
import { getMovies } from ".";

export const datProcess = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getMovies
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  });

  const List = movies && movies.entries;
 return (List.)
};
