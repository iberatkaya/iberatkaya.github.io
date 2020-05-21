import React from 'react';
import Card from 'react-bootstrap/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export interface Project {
    title: string;
    body: string;
    date: string;
    image?: string[];
}

interface Props {
    project: Project;
}

export default function ProjectCard(props: Props) {
    return (
        <Card style={{ width: '18rem', margin: 8}}>
            <Card.Header>
                <Card.Title>{props.project.title}</Card.Title>
                <Card.Subtitle style={{fontSize: 12}} className="mt-2 text-muted">{props.project.date}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                {
                    props.project.image !== undefined ?
                        <Carousel autoPlay={true} interval={2000} infiniteLoop={true} >
                            {
                                props.project.image.map((i) => (
                                    <Card.Img variant="top" src={i} />
                                ))
                            }
                        </Carousel>
                    :
                        <div/>
                }
                <Card.Text>{props.project.body}</Card.Text>
            </Card.Body>
        </Card>
    )
}
