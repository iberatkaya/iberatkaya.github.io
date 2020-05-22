import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../imgs/logo.png';
const Zoom = require('react-reveal/Zoom');
const Pulse = require('react-reveal/Pulse');

export default function Home() {

    return (
        <Container fluid style={{height: '90vh', display: 'flex'}}>
            <Row style={{margin: 'auto'}}>
                <Col>
                    <Pulse forever={true} duration={2500}>
                        <Container style={{backgroundColor: '#343a40', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: '5rem', height: '25vh', width: '25vh'}}>
                            <Image src={logo} fluid />
                        </Container>
                    </Pulse>
                    <Container>
                        <Zoom left>
                            <div style={{fontSize: '1.25rem'}}>
                                Hello and welcome to my portfolio! My name is Ibrahim Berat Kaya. :D 
                                <br/>
                                I am studying Computer Engineering at Istanbul Technical University.
                                <br/>
                                Checkout my <a href="#/projects">projects</a> or <a href="#/about">learn more</a> about me.
                            </div>
                        </Zoom>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}