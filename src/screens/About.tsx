import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { isMobile } from "react-device-detect";
import Image from 'react-bootstrap/Image';
import me from "../imgs/me.jpg"
const Fade = require('react-reveal/Fade');

export default function About() {
    const rowStyle = {alignItems: 'center', justifyContent: 'center', paddingTop: '3vh', paddingBottom: '3vh'};

    
    const _calculateAge = (birthday: Date) => {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const card = (text: React.ReactNode, delay: number) => (
        <Fade left delay={delay}>
            <Card style={{marginBottom: '2vh'}}>
                <Card.Body>
                    <div style={{fontSize: '1.1rem'}}>
                        {text}
                    </div>
                </Card.Body>
            </Card>
        </Fade>
    );

    const nodes: React.ReactNode[] = [
        <p>
            {"Hello. My name is Ibrahim Berat Kaya. I am from State College, PA, USA. I am " + _calculateAge(new Date(1998, 10, 26)).toString() + " years old. I currently reside in Istanbul. I study computer engineering at Istanbul Technical University and I am in my senior year."}
        </p>,
        <p>I am interested in Full Stack Web Development, Cross-Platform Application Development, System Programming, and Machine Learning.</p>,
        <p>I have worked remotely and part time for 7 months at <a href="https://nacsoft.com.tr/" target="_blank" rel="noopener noreferrer">Nacsoft Yazılım</a>. I developed a receipt scanning mobile app available at the <a href="https://apps.apple.com/app/i-expense/id1488919379" target="_blank" rel="noopener noreferrer">App Store</a> and <a href="https://play.google.com/store/apps/details?id=com.nacsoft.iexpense" target="_blank" rel="noopener noreferrer">Play Store</a> named <span style={{color: "#333", fontWeight: "bold"}}>i-expense.</span></p>,
        <p>I have developed several <a href="#/projects">software projects</a> with Node.js, Express, React, React Native, Flutter, Electron, Firebase, and Rust.</p>,
        <p>I am enthusiastic about open-source software and I like to develop open-source packages. I have published 3 open-source software packages.</p>,
        <p>
            Here are some of the courses I have taken at ITU: 
            <ul>
                <li>Object Oriented Programming</li> 
                <li>Data Structures</li> 
                <li>Linear Algebra</li> 
                <li>Numerical Methods</li> 
                <li>Operating Systems</li> 
                <li>Analysis of Algorithms</li> 
                <li>Database Systems</li>  
                <li>Digital Circuits</li>  
            </ul>
        </p>,
        <p>Some of my hobbies:
            <ul>
                <li>
                    <a href="#/music">Music</a>:
                    <ul>
                        <li>I have been playing the guitar for 5 years.</li>
                        <li>I have been playing the keyboard for 2 years.</li>
                    </ul>
                </li>
            </ul> 
        </p>,
        <p>Feel free to checkout my <a href="cv/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a> or contact me at <a href="mailto:ibraberatkaya@gmail.com">ibraberatkaya@gmail.com</a>.</p>
    ];

    return (
        <div>
            <Container style={{minHeight: '93vh', display: 'flex', justifyContent: 'center'}}>
                <Row style={rowStyle}>
                    <Col>
                        <Container>
                            {nodes.map((i, index) => {
                                if(index === 0){
                                    return (
                                        <Row style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
                                            <Col xs={8} md={2} style={{marginBottom: '2vh'}}>
                                                <Fade left delay={0}>
                                                    <Image src={me} roundedCircle fluid />
                                                </Fade>
                                            </Col>
                                            <Col xs={12} md={8}>
                                                {card(i, index * 20)}
                                            </Col>
                                        </Row>
                                    )
                                }
                                else {
                                    return (card(i, (index) * 20 * (isMobile ? 0 : 1)));
                                }
                            })}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
