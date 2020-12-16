import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { isMobile } from "react-device-detect";
import Image from "react-bootstrap/Image";
import me from "../imgs/me.jpg";
import { Fade } from "react-awesome-reveal";

export default function About() {
  const rowStyle = {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "3vh",
    paddingBottom: "3vh",
  };

  const _calculateYearDiff = (date: Date) => {
    const ageDifMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const _calculateMonthDiff = (date: Date) => {
    let months = (new Date().getFullYear() - date.getFullYear()) * 12;
    months += new Date().getMonth() - date.getMonth() + 1;
    return months;
  };

  const card = (text: React.ReactNode, delay: number) => (
    <Fade triggerOnce direction="left" delay={delay}>
      <Card style={{ marginBottom: "2vh" }}>
        <Card.Body>
          <div style={{ fontSize: "1.1rem" }}>{text}</div>
        </Card.Body>
      </Card>
    </Fade>
  );

  const nodes: React.ReactNode[] = [
    <p>
      {"Hello. My name is Ibrahim Berat Kaya. I study Computer Engineering at Istanbul Technical University and I am in my senior year. I am from State College, PA, USA. I am " +
        _calculateYearDiff(new Date(1998, 10, 26)).toString() +
        " years old. I currently reside in Istanbul, Turkey."}
    </p>,
    <ul>
      <li>
        I am interested in Full Stack Development, Cross-Platform Application
        Development, and Machine Learning.
      </li>
      <li>
        I have developed several <a href="#/projects">software projects</a> with
        Node.js, Express, React, React Native, Flutter, Electron, Firebase, and
        Rust.
      </li>
      <li>
        I am enthusiastic about open-source software and I like to develop
        open-source packages. I have published 4 open-source software packages.
      </li>
    </ul>,
    <p>
      Here are some of the courses I have taken at ITU:
      <ul style={{ columns: 2 }}>
        <li>Object Oriented Programming</li>
        <li>Software Engineering</li>
        <li>System Programming</li>
        <li>Artificial Intelligence</li>
        <li>Data Structures</li>
        <li>Linear Algebra</li>
        <li>Numerical Methods</li>
        <li>Operating Systems</li>
        <li>Analysis of Algorithms</li>
        <li>Learning From Data</li>
        <li>Database Systems</li>
        <li>Digital Circuits</li>
      </ul>
    </p>,
    <p>
      My hobbies:
      <ul>
        <li>
          <a href="#/music">Music</a>:
          <ul>
            <li>
              I have been playing the guitar for{" "}
              {_calculateYearDiff(new Date(2015, 1)).toString()} years.
            </li>
            <li>
              I have been playing the keyboard for{" "}
              {_calculateYearDiff(new Date(2018, 1)).toString()} years.
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://iberatkaya.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Writing
          </a>
          :
          <ul>
            <li>
              I enjoy teaching others about the stuff I learn and I like
              writing.
            </li>
            <li>
              I have written 2 Medium Articles and I actively write on{" "}
              <a
                href="https://www.reddit.com/user/iberatkaya"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddit
              </a>
              .
            </li>
          </ul>
        </li>
      </ul>
    </p>,
    <p>
      Feel free to checkout my{" "}
      <a href="cv/cv.pdf" target="_blank" rel="noopener noreferrer">
        CV
      </a>{" "}
      or contact me at{" "}
      <a href="mailto:ibraberatkaya@gmail.com">ibraberatkaya@gmail.com</a>.{" "}
      <div style={{ color: "#777" }}>
        Checkout the{" "}
        <a
          href="https://github.com/iberatkaya/iberatkaya.github.io/tree/dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          code
        </a>{" "}
        of this portfolio.
      </div>
    </p>,
  ];

  return (
    <Container
      style={{ minHeight: "93vh", display: "flex", justifyContent: "center" }}
    >
      <Row style={rowStyle}>
        <Col>
          <Container>
            {nodes.map((i, index) => {
              if (index === 0) {
                return (
                  <Row
                    style={{
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Col xs={8} md={2} style={{ marginBottom: "2vh" }}>
                      <Fade triggerOnce direction="left" delay={0}>
                        <Image src={me} roundedCircle fluid />
                      </Fade>
                    </Col>
                    <Col xs={12} md={8}>
                      {card(i, index * 20)}
                    </Col>
                  </Row>
                );
              } else {
                return card(i, index * 20 * (isMobile ? 0 : 1));
              }
            })}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
