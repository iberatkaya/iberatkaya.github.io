import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-responsive-carousel';
const Flip = require('react-reveal/Flip');

export default function About() {
    const rowStyle = {alignItems: 'center', justifyContent: 'center', paddingLeft: '3vw', paddingRight: '3vw'};

    
    const _calculateAge = (birthday: Date) => {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return (
        <div>
        <Container fluid style={{height: '93vh', display: 'flex', justifyContent: 'center'}}>
            <Row style={rowStyle}>
                <Container>
                    <Flip left>
                        <div style={{fontSize: '1.25rem'}}>
                            <p>
                                {"Hello. My name is Ibrahim Berat Kaya. I am from Pennsylvania, USA. I am " + _calculateAge(new Date(1998, 10, 26)).toString() + " years old. I currently reside in Istanbul. I study computer engineering at Istanbul Technical University and I am in my senior year. Brief information about myself: "}
                            </p>
                            <ul>
                                <li>I am interested in Full Stack Web Development, Cross Platform Application Development, System Programming, and Machine learning.</li>
                                <li>I have developed several <a href="#/projects">softare projects</a> with Node.js, Express, React, React Native, Flutter, Firebase, and Rust.    </li>
                                <li>I am enthusiastic about open source software and I like to develop open source packages.  </li>
                            </ul>
                        </div>
                    </Flip>
                </Container>
            </Row>
        </Container>
        <Container fluid style={{height: '94vh', backgroundColor: 'white', display: 'flex'}}>
            <Row style={rowStyle}>
                Hey
            </Row>
        </Container>

        </div>
    )
}
