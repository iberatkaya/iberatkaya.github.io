import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import logo from "../imgs/logo.png";
const Zoom = require("react-reveal/Zoom");
const Pulse = require("react-reveal/Pulse");

export default function Home() {
  return (
    <Container fluid style={{ height: "90vh", display: "flex" }}>
      <Row style={{ margin: "auto" }}>
        <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
          <Pulse forever={true} duration={2500}>
            <Container
              style={{
                backgroundColor: "#343a40",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "3.5rem",
                height: "30vh",
                width: "30vh",
                borderRadius: 12,
              }}
            >
              <Image src={logo} fluid />
            </Container>
          </Pulse>
          <Container>
            <Zoom left duration={750}>
              <Card>
                <Card.Body>
                  <div style={{ fontSize: "1.25rem" }}>
                    Hello and welcome to my portfolio! My name is Ibrahim Berat
                    Kaya.
                    <br />
                    I am studying Computer Engineering at Istanbul Technical
                    University.
                    <br />
                    <a href="#/projects">Checkout my projects</a> and{" "}
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
