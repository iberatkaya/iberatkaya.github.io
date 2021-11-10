import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { isMobile } from "react-device-detect";
import Image from "react-bootstrap/Image";
import { Fade } from "react-awesome-reveal";

export default function About() {
  const rowStyle = {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "3vh",
    paddingBottom: "3vh",
  };

  const listItemStyle = {
    marginRight: 8,
  };

  const _calculateYearDiff = (date: Date) => {
    const ageDifMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
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
      Hello. My name is Ibrahim Berat Kaya. I got my Bachelor's Degree in
      Computer Engineering at{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.itu.edu.tr"
      >
        Istanbul Technical University
      </a>
      . I am from State College, PA, USA. I am
      {" " + _calculateYearDiff(new Date(1998, 9, 26)).toString() + " "} years
      old. I currently reside in Minneapolis, MN, USA.
    </p>,
    <ul>
      <li>
        I am interested in Full Stack Development, Cross-Platform Application
        Development, iOS Development, and Machine Learning.
      </li>
      <li>
        I have developed several <a href="#/projects">software projects</a> with
        Node.js, Flutter, Swift & SwiftUI, Firebase, React.js, React Native,
        Express.js, Electron.js, and Rust.
      </li>
      <li>
        I have several iOS and watchOS apps developed with Flutter, React
        Native, SwiftUI, and Swift & UIKit available on the{" "}
        <a
          href="https://apps.apple.com/us/developer/selim-ustel/id1498230191"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          App Store
        </a>
        . I also have several Android apps developed with Flutter and React
        Native available on the{" "}
        <a
          href="https://play.google.com/store/apps/developer?id=IBK+Apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Store
        </a>
        .
      </li>
      <li>
        I am enthusiastic about open-source software and I like to develop
        open-source packages. I have published several open-source software
        packages on{" "}
        <a
          href="https://www.npmjs.com/~iberatkaya"
          target="_blank"
          rel="noopener noreferrer"
        >
          npm
        </a>
        ,{" "}
        <a
          href="https://pub.dev/packages?q=email%3Aibraberatkaya%40gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          pub.dev
        </a>
        , and{" "}
        <a
          href="https://crates.io/users/iberatkaya"
          target="_blank"
          rel="noopener noreferrer"
        >
          crates.io
        </a>
        .
      </li>
    </ul>,
    <p>
      Here are some of the courses I have taken at ITU:
      <ul style={{ columns: 2 }}>
        <li style={listItemStyle}>Object Oriented Programming</li>
        <li style={listItemStyle}>Software Engineering</li>
        <li style={listItemStyle}>System Programming</li>
        <li style={listItemStyle}>Artificial Intelligence</li>
        <li style={listItemStyle}>Data Structures</li>
        <li style={listItemStyle}>Linear Algebra</li>
        <li style={listItemStyle}>Numerical Methods</li>
        <li style={listItemStyle}>Operating Systems</li>
        <li style={listItemStyle}>Analysis of Algorithms</li>
        <li style={listItemStyle}>Learning From Data</li>
        <li style={listItemStyle}>Database Systems</li>
        <li style={listItemStyle}>Digital Circuits</li>
        <li style={listItemStyle}>Secure Programming</li>
        <li style={listItemStyle}>Functional Programming</li>
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
              I have written several{" "}
              <a
                href="https://iberatkaya.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium articles
              </a>{" "}
              and I occasionally write on{" "}
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
                    <Col xs={8} md={3} style={{ marginBottom: "2vh" }}>
                      <Fade triggerOnce direction="left" delay={0}>
                        <Image
                          src={"https://github.com/iberatkaya.png?size=400"}
                          roundedCircle
                          fluid
                        />
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
