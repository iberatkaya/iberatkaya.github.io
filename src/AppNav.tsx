import React from "react";
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import Home from "./screens/Home";
import NavBar from "./components/NavBar";
import Projects from "./screens/Projects";
import About from "./screens/About";
import Music from "./screens/Music";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <Router hashType="slash">
        <ScrollToTop />
        <NavBar/>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/music">
          <Music/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
    </Router>
  );
}