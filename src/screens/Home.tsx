import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Fade = require('react-reveal/Fade');

export default function Home() {

    return (
        <Container fluid style={{height: '90vh', display: 'flex'}}>
            <Row style={{margin: 'auto'}}>
                <Col>
                    <Container>
                        <Fade left>
                            <div style={{fontSize: 21}}>
                                Hello and welcome to my portfolio! My name is Ibrahim Berat Kaya. :D 
                                <br/>
                                I am studying Computer Engineering at Istanbul Technical University.
                                <br/>
                                Checkout my <a href="/projects">projects</a> or <a href="/about">learn more</a> about me.
                            </div>
                        </Fade>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}