import axios from "axios";

export const getMovies = () => {
  return axios.get(
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
  );
};
