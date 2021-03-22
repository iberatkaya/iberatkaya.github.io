import React from "react";
import Container from "react-bootstrap/Container";
import ProjectCard from "../components/ProjectCard";
import Row from "react-bootstrap/Row";
import { isMobile } from "react-device-detect";
import { Slide } from "react-awesome-reveal";
import { myprojects } from "../projects/projects";

export default function Projects() {
  return (
    <Container fluid style={{ display: "flex" }}>
      <Row style={{ justifyContent: "center" }}>
        {myprojects.map((i, index, arr) => {
          if (index % 3 === 0) {
            return (
              <Slide
                direction={index % 2 === 0 ? "left" : "right"}
                triggerOnce
                fraction={isMobile ? 0.05 : 0.1}
                duration={750}
              >
                <Row
                  style={{
                    justifyContent: "center",
                    marginRight: 0,
                    marginLeft: 0,
                  }}
                >
                  <ProjectCard project={i} />
                  {arr.length > index + 1 ? (
                    <ProjectCard project={arr[index + 1]} />
                  ) : (
                    <div />
                  )}
                  {arr.length > index + 2 ? (
                    <ProjectCard project={arr[index + 2]} />
                  ) : (
                    <div />
                  )}
                </Row>
              </Slide>
            );
          }
          return <div></div>;
        })}
      </Row>
    </Container>
  );
}
