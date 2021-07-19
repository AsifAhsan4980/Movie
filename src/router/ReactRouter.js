import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../component/navbar/NavigationBar";
import Footer from "../component/footer/Footer";
import Home from "../pages/home/Home.jsx";
import "../App.css";
import Movies from "../pages/movies/Movies.jsx";
import Series from "../pages/Series/Series";

class ReactRouter extends Component {
  state = {};
  render() {
    return (
      <Router className="background">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Movies">
            <Movies />
          </Route>
          <Route path="/Series">
            <Series />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default ReactRouter;
