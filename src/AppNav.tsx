import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from "./screens/Home";
import NavBar from "./components/NavBar";
import Projects from "./screens/Projects";

export default function App() {
  return (
    <Router>
        <NavBar/>
        <Route exact path="/projects">
          <Projects/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
    </Router>
  );
}