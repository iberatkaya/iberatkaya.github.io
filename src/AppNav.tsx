import React from "react";
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import Home from "./screens/Home";
import NavBar from "./components/NavBar";
import Projects from "./screens/Projects";
import About from "./screens/About";

export default function App() {
  return (
    <Router hashType="slash">
        <NavBar/>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
    </Router>
  );
}