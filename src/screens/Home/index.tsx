import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import logo from "../../imgs/logo.png";
import { Zoom, AttentionSeeker } from "react-awesome-reveal";

export default function Home() {
  return (
    <Container fluid style={{ height: "90vh", display: "flex" }}>
      <Row style={{ margin: "auto" }}>
        <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
          <AttentionSeeker
            style={{ animationIterationCount: "infinite" }}
            triggerOnce
            effect="pulse"
            duration={2500}
          >
            <Container
              style={{
                backgroundColor: "#343a40",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "3.5rem",
                height: "28vh",
                width: "28vh",
                borderRadius: 12,
              }}
            >
              <Image src={logo} fluid />
            </Container>
          </AttentionSeeker>
          <Container>
            <Zoom triggerOnce direction="left" duration={750}>
              <Card>
                <Card.Body>
                  <div style={{ fontSize: "1.1rem", maxWidth: 450 }}>
                    Hello, I am Ibrahim Berat Kaya. Welcome to my portfolio!
                    <br />I am a Software Developer. Checkout{" "}
                    <a href="#/projects">my projects</a>,{" "}
                    <a href="#/experience">my work experience</a>, and{" "}
                    <a href="#/about">learn more</a> about me.
                  </div>
                </Card.Body>
              </Card>
            </Zoom>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
