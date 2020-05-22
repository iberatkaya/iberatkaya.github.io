import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
const Flip = require('react-reveal/Flip');

export default function About() {
    const rowStyle = {alignItems: 'center', justifyContent: 'center', paddingLeft: '3vw', paddingRight: '3vw', paddingTop: '3vh', paddingBottom: '3vh'};

    
    const _calculateAge = (birthday: Date) => {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return (
        <div>
        <Container fluid style={{minHeight: '93vh', display: 'flex', justifyContent: 'center'}}>
            <Row style={rowStyle}>
                <Container>
                    <Flip left>
                        <div style={{fontSize: '1.25rem'}}>
                            <p>
                                {"Hello. My name is Ibrahim Berat Kaya. I am from Pennsylvania, USA. I am " + _calculateAge(new Date(1998, 10, 26)).toString() + " years old. I currently reside in Istanbul. I study computer engineering at Istanbul Technical University and I am in my senior year. Brief information about myself: "}
                            </p>
                            <ul>
                                <li>I am interested in Full Stack Web Development, Cross-Platform Application Development, System Programming, and Machine learning.</li>
                                <li>I have developed several <a href="#/projects">software projects</a> with Node.js, Express, React, React Native, Flutter, Electron, Firebase, and Rust.    </li>
                                <li>I am enthusiastic about open-source software and I like to develop open-source packages.  </li>
                                <li>
                                    Here are some of the courses I have taken at ITU: 
                                    <ul>
                                        <li>OOP</li> 
                                        <li>Data Structures</li> 
                                        <li>Linear Algebra</li> 
                                        <li>Numerical Methods</li> 
                                        <li>Operating Systems</li> 
                                        <li>Analysis of Algorithms</li> 
                                        <li>Database Systems</li>  
                                    </ul>
                                </li>
                            </ul>
                            <p>Feel free to checkout my <a href="https://raw.githubusercontent.com/iberatkaya/iberatkaya.github.io/dev/cv/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a> or contact me at <a href="mailto:ibraberatkaya@gmail.com">ibraberatkaya@gmail.com</a>.</p>
                        </div>
                    </Flip>
                </Container>
            </Row>
        </Container>

        </div>
    )
}
