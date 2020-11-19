import React from "react";
import Container from "react-bootstrap/Container";
import ProjectCard from "../components/ProjectCard";
import Row from "react-bootstrap/Row";
import MusicScalesImgs from "../imgs/music_scales/imgs";
import QRImgs from "../imgs/qr/imgs";
import MeetUpsImgs from "../imgs/meetups/imgs";
import iexpenseImgs from "../imgs/iexpense/imgs";
import FractalImgs from "../imgs/fractal/imgs";
import LabelerImgs from "../imgs/labeler/imgs";
import PoemifyImgs from "../imgs/poemify/imgs";
import CompressorImgs from "../imgs/compressor/imgs";
import RobotImgs from "../imgs/robot/imgs";
import GaussImgs from "../imgs/gauss/imgs";
import PlayifyImgs from "../imgs/playify/imgs";
import ColorBlocImgs from "../imgs/colorbloc/imgs";
import ChatAppImgs from "../imgs/chatapp/imgs";
import ScoreCounterImgs from "../imgs/score_counter/imgs";
import { isMobile } from "react-device-detect";
import { Project } from "../interfaces/project";
import AppStatisticsCard from "../components/AppStatisticsCard";
import { Fade, Zoom } from "react-awesome-reveal";

export default function Projects() {
  const myprojects: Project[] = [
    {
      body:
        "Music Scales is a music theory mobile application that shows scales and chords for the piano and guitar. Developed with Flutter. 20k+ downloads at the Play Store.",
      title: "Music Scales",
      projectType: "Mobile App",
      date: "12/2018 - 01/2019",
      image: MusicScalesImgs,
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.kaya.musicapp",
        appstore: "https://apps.apple.com/us/app/music-scales/id1498463498",
        github: "https://github.com/iberatkaya/Music_Scales",
      },
    },
    {
      body:
        "A QR scanner and generator mobile application developed with React Native. +10k downloads at the Play Store.",
      title: "QR Reader & Generator",
      projectType: "Mobile App",
      date: "06/2019",
      image: QRImgs,
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.kaya.qr_reader_and_generator",
        appstore:
          "https://apps.apple.com/us/app/qr-reader-generator/id1498310082",
        github: "https://github.com/iberatkaya/QR-Reader-Generator",
      },
    },
    {
      body:
        "MeetUps With Friends is a group meetup organizer application developed with React, Express, and React Native. It is currently discontinued, but the source code is still available.",
      title: "MeetUps With Friends",
      projectType: "Mobile and Web App",
      date: "11/2019",
      image: MeetUpsImgs,
      links: {
        github: "https://github.com/iberatkaya/meetups",
      },
    },
    {
      body:
        "Image Augmentation is an open-source NPM Package designed to augment images for training models in machine learning.",
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
      projectType: "NPM Package",
      date: "01/2020",
      links: {
        npmurl: "https://www.npmjs.com/package/image-augmentation/",
        github: "https://github.com/iberatkaya/image-augmentation",
      },
    },
    {
      body:
        "A Turkish receipt scanning mobile application developed with React Native and Google Cloud Vision. Developed for Nacsoft Yazılım while I was working there part time as a software developer.",
      title: "i-expense",
      projectType: "Mobile App",
      date: "06/2019 - 01/2020",
      image: iexpenseImgs,
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.nacsoft.iexpense",
        appstore: "https://apps.apple.com/app/i-expense/id1488919379",
      },
    },
    {
      body:
        "MouseBot is an open-source NPM Package built with Rust and Node.js using native Neon bindings. It is a cross-platform desktop automation package.",
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
      projectType: "NPM Package",
      date: "02/2020",
      links: {
        npmurl: "https://www.npmjs.com/package/mousebot",
        github: "https://github.com/iberatkaya/mousebot",
      },
    },
    {
      body:
        "Fractal Gen is an open-source Rust Crate that generates fractals as BMP images with 0 dependencies. The BMP images are created natively within the library.",
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
      projectType: "Cargo Crate",
      date: "03/2020",
      image: FractalImgs,
      imagePadding: "2.5rem",
      codeLang: "rust",
      links: {
        weburl: "https://crates.io/crates/fractal-gen",
        github: "https://github.com/iberatkaya/fractal-gen",
      },
    },
    {
      body:
        "Labeler is an Electron App that helps users label images. Simply open a directory, select your output folder name and class names, and begin labelling. Labeler will automatically copy your labeled images to the desired output folder. It was designed to help labelling images by providing a GUI and automatically doing the copying operation. The project started when I thought of a way to help me simplify classifing a dataset.",
      title: "Labeler",
      projectType: "Desktop App",
      date: "03/2020",
      image: LabelerImgs,
      imagePadding: "0",
      links: {
        github: "https://github.com/iberatkaya/labeler",
      },
    },
    {
      body:
        "Poemify is a social poem sharing mobile application developed with React Native and Firebase. Users may create accounts, like, share, and save poems.",
      title: "Poemify",
      projectType: "Mobile App",
      date: "03/2020 - 04/2020",
      image: PoemifyImgs,
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.kaya.poemify",
        appstore:
          "https://apps.apple.com/us/app/poemify-social-poetry/id1507168355",
        github: "https://github.com/iberatkaya/poemify",
      },
    },
    {
      body:
        "Compressor is a mobile application developed with Flutter. It compresses images and videos.",
      title: "Compressor",
      projectType: "Mobile App",
      date: "04/2020",
      image: CompressorImgs,
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.kaya.compressor",
        appstore:
          "https://apps.apple.com/us/app/compressor-image-and-video/id1510246501",
        github: "https://github.com/iberatkaya/compressor",
      },
    },
    {
      body:
        "Robot Duel is a Flutter App built with Flame. It is a mobile and web game in which you play against corrupt robots. Earn gold while fighting. Spend the gold to gain powerups. As the level increases, the robots get more powerful. It is also available as a web app, but keep in mind that Flutter Web is still in beta, so the performance may not be optimal and the startup time is significant.",
      title: "Robot Duel",
      projectType: "Mobile and Web Game",
      date: "05/2020",
      image: RobotImgs,
      imagePadding: "0",
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.kaya.robotduel",
        appstore: "https://apps.apple.com/us/app/robot-duel-fight/id1511433623",
        github: "https://github.com/iberatkaya/Robot-Duel",
        weburl: "https://iberatkaya.github.io/Robot-Duel/#/",
      },
    },
    {
      body:
        "Gaussian Blur is a simple Rust Project that applies Gaussian Blur to images.",
      title: "Gaussian Blur",
      code: ` 
extern crate image;
use image::open;
//Open my library named blur
mod blur;
//Get the gaussian_blur function from blur
use blur::gaussian::gaussian_blur;

fn main() {
    //Open the image
    let image = open("./images/pika.png").unwrap();

    //Apply gaussian blur and save the image
    gaussian_blur(image, 9, 5.0, "./images/blurred_pika.png");
}
`,
      codeLang: "rust",
      projectType: "Rust Project",
      date: "05/2020",
      image: GaussImgs,
      imagePadding: "0",
      links: {
        github: "https://github.com/iberatkaya/gaussian-blur",
      },
    },
    {
      body:
        "Playify is an open-source Flutter package for playing music and fetching music metadata from the music library. It was built using iOS’s Music Player Library and Flutter’s Method Channel. It is available on pub.dev.",
      code: `
import 'package:playify/playify.dart';

//Create an instance
Playify myplayer = Playify();

//Play from the latest queue.
Future<void> play() async {
    await myplayer.play();
}

//Fetch all songs from the music library.
Future<List<Artist>> getAllSongs() async {
    var artist = await myplayer.getAllSongs(sort: true);
    return artists;
}

//Fetch song information about the currently playing song in the queue.
Future<SongInfo> nowPlaying() async {
    var artist = await myplayer.nowPlaying();
    return artists;
}

//Set the queue using songIDs for iOS.
Future<void> setQueue(List<String> songs, int index) async {
    await myplayer.setQueue(songIDs: songs, startIndex: index);
}

//Skip to the next song in the queue.
Future<void> next() async {
    await myplayer.next();
}
`,
      title: "Playify (Plugin)",
      projectType: "Flutter Plugin",
      date: "06/2020",
      links: {
        weburl: "https://pub.dev/packages/playify",
        github: "https://github.com/iberatkaya/playify",
        medium:
          "https://medium.com/@iberatkaya/developing-a-flutter-plugin-playify-39192e2fde19",
      },
    },
    {
      body:
        "The Playify App is an iOS Music Player app developed with Flutter and The Playify Plugin. Users can play/pause/seek songs, browse their media libraries.",
      title: "Playify (App)",
      projectType: "Music Player Mobile App",
      date: "08/2020",
      image: PlayifyImgs,
      imagePadding: "0",
      links: {
        appstore: "https://apps.apple.com/us/app/id1529006344",
        github: "https://github.com/iberatkaya/playify_app",
      },
    },
    {
      body:
        "ColorBloc is a demo app built with Flutter using Bloc and CustomPaint. It is available as a website, but can also be ran as a mobile app.",
      title: "ColorBloc",
      projectType: "Flutter Web App",
      date: "09/2020",
      image: ColorBlocImgs,
      imagePadding: "0",
      links: {
        github: "https://github.com/iberatkaya/colorBloc",
        weburl: "https://iberatkaya.github.io/colorBloc/index.html",
      },
    },
    {
      body:
        "Chat App is a messaging app built with Flutter and Node.js using Socket.io and Express.js. It is available as a website deployed on Heroku, but can also be ran as a mobile app.",
      title: "Chat App",
      projectType: "Flutter Web App - Express.js",
      date: "10/2020",
      image: ChatAppImgs,
      imagePadding: "0",
      links: {
        github: "https://github.com/iberatkaya/chat_app",
        weburl: "https://ibkchatapp.herokuapp.com/",
        medium:
          "https://iberatkaya.medium.com/developing-a-chat-app-with-express-socket-io-and-flutter-web-47dcaeb67768",
      },
    },
    {
      body:
        "Score Counter is an Apple Watch App developed with Swift and SwiftUI. It lets users track the score of games with two players/teams such as soccer or basketball. This is my first SwiftUI project.",
      title: "Score Counter",
      projectType: "SwiftUI",
      date: "11/2020",
      image: ScoreCounterImgs,
      links: {
        appstore: "https://apps.apple.com/us/app/id1540365945",
        github: "https://github.com/iberatkaya/score-counter",
      },
    },
  ].reverse();

  const appStatistic: string[] = [
    'Music Scales has 35k+ downloads on the <a href="https://play.google.com/store/apps/details?id=com.kaya.musicapp" target="_blank" rel="noopener noreferrer">Play Store</a> and 1k+ App Units on the <a href="https://apps.apple.com/us/app/music-scales/id1498463498" target="_blank" rel="noopener noreferrer">App Store</a>.',
    'QR Reader & Generator has 10k+ downloads on the <a href="https://play.google.com/store/apps/details?id=com.kaya.qr_reader_and_generator" target="_blank" rel="noopener noreferrer">Play Store</a>.',
    'Compressor has 1k+ App Units on the <a href="https://apps.apple.com/us/app/compressor-image-and-video/id1510246501" target="_blank" rel="noopener noreferrer">App Store</a>.',
  ];

  return (
    <Container fluid style={{ display: "flex" }}>
      <Row style={{ justifyContent: "center" }}>
        <Fade triggerOnce direction="left" duration={650}>
          <AppStatisticsCard items={appStatistic} />
        </Fade>
        <Zoom triggerOnce fraction={isMobile ? 0.05 : 0.1} duration={750}>
          {myprojects.map((i, index, arr) => {
            if (index % 3 === 0) {
              return (
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
              );
            }
            return <div></div>;
          })}
        </Zoom>
      </Row>
    </Container>
  );
}
