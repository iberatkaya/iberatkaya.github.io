import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageZoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Fade } from "react-awesome-reveal";
import photos from "../../photography";
import LazyLoad from "react-lazyload";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

export default function Photography() {
  return (
    <Container fluid style={{ height: "90vh", display: "flex" }}>
      <Row style={{ margin: "auto" }}>
        <Col md={1} />
        <Col md={10} xs={12} style={{ marginTop: "2vh", marginBottom: "5vh" }}>
          <Container>
            <Fade triggerOnce direction="left" duration={850}>
              <Card style={{ backgroundColor: "#f9f9f9" }}>
                <Card.Body>
                  <div>
                    The images are from my iPhone 12 mini and my <a href="https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/eos-dslr-and-mirrorless-cameras/mirrorless/eos-m6-mark-ii-ef-m-15-45mm-f-3-5-6-3-is-stm-evf-kit" target="_blank" rel="noopener noreferrer">Canon M6 Mark II</a> mirrorless camera. You can click the image to zoom it.
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Container>
          <Container style={{ marginTop: "2vh" }}>
            <Fade triggerOnce direction="left" duration={750}>
              <Carousel
                  autoPlay={true}
                  interval={5000}
                  infiniteLoop={true}>
                {photos.map((i) => (
                    <LazyLoad>
                        <ImageZoom >
                            <Image fluid src={i}  />
                        </ImageZoom>
                    </LazyLoad>
                ))}
              </Carousel>
            </Fade>
          </Container>
        </Col>
        <Col md={1} />
      </Row>
    </Container>
  );
}
