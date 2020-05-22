import React from 'react'
import Container from 'react-bootstrap/Container';
import ProjectCard, { Project } from '../components/ProjectCard';
import Row from 'react-bootstrap/Row';
import MusicScalesImgs from '../imgs/music_scales/imgs';
import QRImgs from '../imgs/qr/imgs';
import MeetUpsImgs from '../imgs/meetups/imgs';
import iexpenseImgs from '../imgs/iexpense/imgs';
import FractalImgs from '../imgs/fractal/imgs';
import PoemifyImgs from '../imgs/poemify/imgs';
import RobotImgs from '../imgs/robot/imgs';


export default function Projects() {
    let myprojects: Project[] = [
        {   
            body: "Music Scales is a music theory mobile application that shows scales and chords for the piano and guitar. Developed with Flutter. 20k+ downloads at the Play Store.",
            title: "Music Scales",
            projectType: 'Mobile App',
            date: "12/2018 - 01/2019",
            image: MusicScalesImgs,
            links: {
                playstore: 'https://play.google.com/store/apps/details?id=com.kaya.musicapp',
                appstore: 'https://apps.apple.com/us/app/music-scales/id1498463498',
                github: 'https://github.com/iberatkaya/Music_Scales'
            }
        },
        {   
            body: "A QR scanner and generator mobile application developed with React Native. +10k downloads at the Play Store.",
            title: "QR Reader & Generator",
            projectType: 'Mobile App',
            date: "06/2019",
            image: QRImgs,
            links: {
                playstore: 'https://play.google.com/store/apps/details?id=com.kaya.qr_reader_and_generator',
                appstore: 'https://apps.apple.com/us/app/qr-reader-generator/id1498310082',
                github: 'https://github.com/iberatkaya/QR-Reader-Generator'
            }
        },
        {   
            body: "MeetUps With Friends is a group meetup organizer application developed with React, Express, and React Native.",
            title: "MeetUps With Friends",
            projectType: 'Mobile and Web App',
            date: "11/2019",
            image: MeetUpsImgs,
            links: {
                playstore: 'https://play.google.com/store/apps/details?id=com.kaya.meetupapp',
                appstore: 'https://apps.apple.com/us/app/meetups-with-friends/id1498308902',
                weburl: 'https://meetupswithfriends.com/',
                github: 'https://github.com/iberatkaya/meetups'
            }
        },
        {   
            body: "Image Augmentation is an open-source NPM Package designed to augment images for training models in machine learning.",
            code: `
import { ImageAugmentation } from 'image-augmentation';

//Create an instance of the class.
let ia = new ImageAugmentation();
 
//Makes each images in the current directory grey with each having a probability of 0.4.
ia.makeGrey({
   probability: 0.4,
   image: './'
});
 
//Makes the test.jpg image rotate 120 degrees grey with a probability 0.2
ia.rotate({
   probability: 0.2,
   rotationDegree: 120,
   image: 'test.jpg'
});

//Resizes 10 images in the data directory to 280x280.
ia.executeMultiple({
   execute: async () => {
      const image = './data';
      await ia.resize({width: 280, height: 280, image, probability: 1});
   },
   outputNumber: 10
});
`,
            title: "Image Augmentation",
            projectType: 'NPM Package',
            date: "01/2020",
            links: {
                npmurl: 'https://www.npmjs.com/package/image-augmentation/',
                github: 'https://github.com/iberatkaya/image-augmentation'
            }
        },
        {   
            body: "A Turkish receipt scanning mobile application developed with React Native and Google Cloud Vision. Developed for Nacsoft Yazılım while I was working there part time as a software developer.",
            title: "i-expense",
            projectType: 'Mobile App',
            date: "06/2019 - 01/2020",
            image: iexpenseImgs,
            links: {
                playstore: 'https://play.google.com/store/apps/details?id=com.nacsoft.iexpense',
                appstore: 'https://apps.apple.com/app/i-expense/id1488919379'
            }
        },
        {   
            body: "MouseBot is an open-source NPM Package built with Rust and Node.js using native Neon bindings. It is a cross platform desktop automation package.",
            code: `
import { Bot } from 'mousebot';
    
/**
 * Create an instance of the class. 
 * Each member function of the class is an async function that returns a promise.
 */ 
let bot = new Bot();
    
//Move the mouse to the coordinates x=400, y=500. 
bot.mouse.move(400, 500);
    
//Move the mouse from x=300, y=400 to x=600, y=500 smoothly.
bot.mouse.moveSmooth(300, 300, 600, 500);
    
//Type "Hello World!"
bot.keyboard.write("Hello world!")
    
//Chain the alt and f5 keys to perform an ALT+F5 to refresh a page.
bot.keyboard.keyChain("alt", "f5");

//Directly use some implemented shortcuts.
bot.shortcuts.altTab();

//Chain functions using an async function.
let chain = async () => {
    await bot.mouse.moveSmooth(300, 300, 600, 500);
    await bot.keyboard.write("Hello world!")
}
chain();
`,
            title: "MouseBot",
            projectType: 'NPM Package',
            date: "02/2020",
            links: {
                npmurl: 'https://www.npmjs.com/package/mousebot',
                github: 'https://github.com/iberatkaya/mousebot'
            }
        },
        {   
            body: "Fractal Gen is an open-source Rust Crate that generates fractals as BMP images.",
            code: `
// Create a Fractal from the pixels.
let mut image = Fractal::new(pixels);

// Draw the Mandelbrot Set on the image.
image.mandelbrot(Pixel::new(250, 0, 0));

// Draw a Sierpinksi Triangle on the image.
image.sierpinski_triangle(180, 180, 100, Pixel::new(0, 0, 250));

// Draw a Koch Curve on the image.
image.koch_curve(675, 75, 925, 325, 5, Pixel::new(0, 250, 0));

// Write the BMP image.
image.write_image("./test.bmp");
`,
            title: "Fractal Gen",
            projectType: 'Cargo Crate',
            date: "03/2020",
            image: FractalImgs,
            imagePadding: '2.5rem',
            codeLang: "rust",
            links: {
                weburl: 'https://crates.io/crates/fractal-gen',
                github: 'https://github.com/iberatkaya/fractal-gen'
            }
        },
        {   
            body: "Poemify is a social poem sharing mobile application developed with React Native and Firebase. Users may create accounts, like, share, and save poems.",
            title: "Poemify",
            projectType: 'Mobile App',
            date: "03/2020 - 04/2020",
            image: PoemifyImgs,
            links: {
                playstore: 'https://play.google.com/store/apps/details?id=com.kaya.poemify',
                appstore: 'https://apps.apple.com/us/app/poemify-social-poetry/id1507168355',
                github: 'https://github.com/iberatkaya/poemify'
            }
        },
        {   
            body: "Robot Duel is a Flutter App built with Flame. It is a mobile and web game in which you play against corrupt robots. Earn gold while fighting. Spend the gold to gain powerups. As the level increases, the robots get more powerful. It is also available asa a web app, but keep in mind that Flutter Web is still in beta, so the performance may not be optimal and the startup time is significant.",
            title: "Robot Duel",
            projectType: 'Mobile and Web Game',
            date: "05/2020",
            image: RobotImgs,
            imagePadding: '0',
            links: {
                playstore: 'https://play.google.com/store/apps/details?id=com.kaya.robotduel',
                appstore: 'https://apps.apple.com/us/app/robot-duel-fight/id1511433623',
                github: 'https://github.com/iberatkaya/Robot-Duel',
                weburl: 'https://iberatkaya.github.io/Robot-Duel/#/'
            }
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
