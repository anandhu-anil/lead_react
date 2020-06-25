import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const WebNavigator = props => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="*" to="/" push />
      </Switch>
    </Router>
  );
};
export default WebNavigator;
