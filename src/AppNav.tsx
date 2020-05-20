import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
        <NavBar/>
          <Route path="/">
            <Home />
          </Route>
    </Router>
  );
}
