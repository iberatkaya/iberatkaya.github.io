import React from 'react'
import Container from 'react-bootstrap/Container';
import ProjectCard, { Project } from '../components/ProjectCard';
import Row from 'react-bootstrap/Row';
import MusicScalesImgs from '../imgs/music_scales/imgs';
import QRImgs from '../imgs/qr/imgs';
import MeetUpsImgs from '../imgs/meetups/imgs';


export default function Projects() {
    let myprojects: Project[] = [
        {   
            body: "Music Scales",
            title: "Music Scales",
            date: "2019",
            image: MusicScalesImgs
        },
        {   
            body: "Music Scales",
            title: "QR Reader & Generator",
            date: "2019",
            image: QRImgs
        },
        {   
            body: "MeetUps With Friends",
            title: "MeetUps With Friends",
            date: "2019",
            image: MeetUpsImgs
        },
    ].reverse();

    return (
        <Container fluid style={{display: "flex"}}>
            <Row style={{justifyContent: "center"}}>
                {
                    myprojects.map((i) => (
                        <ProjectCard project={i} />
                    ))
                }
            </Row>
        </Container>
    )
}
