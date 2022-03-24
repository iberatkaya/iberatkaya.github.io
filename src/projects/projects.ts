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
import UniPubsImgs from "../imgs/unipubs/imgs";
import AdEarningsImgs from "../imgs/adearnings/imgs";
import ImageEditorImgs from "../imgs/image_editor/imgs";
import GitWatchImgs from "../imgs/git_watch/imgs";
import DrawAnimationImgs from "../imgs/draw_animation/imgs";
import SpontyImgs from "../imgs/sponty/imgs";
import NotesImgs from "../imgs/notes/imgs";
import WWDC21Imgs from "../imgs/wwdc21/imgs";
import WeatherAppImgs from "../imgs/weather_app/imgs";
import { Project } from "../interfaces/project";

export const myprojects: Project[] = [
  {
    body: "A QR scanner and generator mobile application developed with React Native. +10k downloads at the Play Store.",
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
    body: "MeetUps With Friends is a group meetup organizer application developed with React, Express, and React Native. It is currently discontinued, but the source code is still available.",
    title: "MeetUps With Friends",
    projectType: "Mobile and Web App",
    date: "11/2019",
    image: MeetUpsImgs,
    links: {
      github: "https://github.com/iberatkaya/meetups",
    },
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
    projectType: "NPM Package",
    date: "01/2020",
    links: {
      npmurl: "https://www.npmjs.com/package/image-augmentation/",
      github: "https://github.com/iberatkaya/image-augmentation",
    },
  },
  {
    body: "A Turkish receipt scanning mobile application developed with React Native and Google Cloud Vision. Developed for Nacsoft Yazılım while I was working there part time as a software developer.",
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
    body: "MouseBot is an open-source NPM Package built with Rust and Node.js using native Neon bindings. It is a cross-platform desktop automation package.",
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
    body: "Fractal Gen is an open-source Rust Crate that generates fractals as BMP images with 0 dependencies. The BMP images are created natively within the library.",
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
    body: "Labeler is an Electron App that helps users label images. Simply open a directory, select your output folder name and class names, and begin labelling. Labeler will automatically copy your labeled images to the desired output folder. It was designed to help labelling images by providing a GUI and automatically doing the copying operation. The project started when I thought of a way to help me simplify classifing a dataset.",
    title: "Labeler",
    projectType: "Desktop App",
    date: "03/2020",
    image: LabelerImgs,
    imagePadding: "0rem",
    links: {
      github: "https://github.com/iberatkaya/labeler",
    },
  },
  {
    body: "Poemify is a social poem sharing mobile application developed with React Native and Firebase. Users may create accounts, like, share, and save poems.",
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
    body: "Compressor is a mobile application developed with Flutter. It compresses images and videos.",
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
    body: "Robot Duel is a Flutter App built with Flame. It is a mobile and web game in which you play against corrupt robots. Earn gold while fighting. Spend the gold to gain powerups. As the level increases, the robots get more powerful. It is also available as a web app, but keep in mind that Flutter Web is still in beta, so the performance may not be optimal and the startup time is significant.",
    title: "Robot Duel",
    projectType: "Mobile and Web Game",
    date: "05/2020",
    imagePadding: "0rem",
    image: RobotImgs,
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.kaya.robotduel",
      appstore: "https://apps.apple.com/us/app/robot-duel-fight/id1511433623",
      github: "https://github.com/iberatkaya/Robot-Duel",
      weburl: "https://iberatkaya.github.io/Robot-Duel/#/",
    },
  },
  {
    body: "Gaussian Blur is a simple Rust Project that applies Gaussian Blur to images.",
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
    imagePadding: "0rem",
    links: {
      github: "https://github.com/iberatkaya/gaussian-blur",
    },
  },
  {
    body: "Playify is an open-source Flutter package for playing music and fetching music metadata from the music library. It was built using iOS’s Music Player Library and Flutter’s Method Channel. It is available on pub.dev.",
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
    body: "The Playify App is an iOS Music Player app developed with Flutter and The Playify Plugin. Users can play/pause/seek songs, browse their media libraries.",
    title: "Playify (App)",
    projectType: "Music Player Mobile App",
    date: "08/2020",
    image: PlayifyImgs,
    links: {
      appstore: "https://apps.apple.com/us/app/id1529006344",
      github: "https://github.com/iberatkaya/playify_app",
    },
  },
  {
    body: "ColorBloc is a demo app built with Flutter using Bloc and CustomPaint. It is available as a website, but can also be ran as a mobile app.",
    title: "ColorBloc",
    projectType: "Flutter Web App",
    date: "09/2020",
    image: ColorBlocImgs,
    links: {
      github: "https://github.com/iberatkaya/colorBloc",
      weburl: "https://iberatkaya.github.io/colorBloc/index.html",
    },
  },
  {
    body: "Chat App is a messaging app built with Flutter and Node.js using Socket.io and Express.js. It is available as a website deployed on Heroku, but can also be ran as a mobile app.",
    title: "Chat App",
    projectType: "Flutter Web App - Express.js",
    date: "10/2020",
    image: ChatAppImgs,
    imagePadding: "0rem",
    links: {
      github: "https://github.com/iberatkaya/chat_app",
      weburl: "https://ibkchatapp.herokuapp.com/",
      medium:
        "https://iberatkaya.medium.com/developing-a-chat-app-with-express-socket-io-and-flutter-web-47dcaeb67768",
    },
  },
  {
    body: "Score Counter is a watchOS App developed with Swift and SwiftUI. It lets users track the score of games with two players/teams such as soccer or basketball. This is my first SwiftUI project.",
    title: "Score Counter",
    projectType: "SwiftUI - watchOS App",
    date: "11/2020",
    imagePadding: "1rem",
    image: ScoreCounterImgs,
    links: {
      appstore: "https://apps.apple.com/us/app/id1540365945",
      github: "https://github.com/iberatkaya/score-counter",
    },
  },
  {
    body: "UniPubs is an app used in Turkey where students or stationery stores can upload study notes as PDF's or images. I developed UniPubs while I was working at GMC Teknoloji. The uploaded study notes are then sold to users as an open market. UniPubs has an app for users who want to purchase notes and a separete merchant app for users that want to upload study notes and earn money. The main target audience is university students. Users can filter notes based on universities and faculties. Two versions of UniPubs exists. One is for students and the other is for merchants. The merchant app was released but later removed. I developed UniPubs with Flutter for the mobile apps, React.js for the web app, and Node.js for the server and payment system.",
    title: "UniPubs",
    projectType: "Flutter - React - Node.js",
    date: "06/2020 - 11/2020",
    image: UniPubsImgs,
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.customer.unipubs",
      appstore:
        "https://apps.apple.com/us/app/unipubs-%C3%B6%C4%9Frenci/id1536918993",
      weburl: "http://app.unipubs.com/",
    },
  },
  {
    body: "Music Scales is a music theory mobile application that shows scales and chords for the piano and guitar. Users can view and play notes and chords, view theoratical and statistical information about chords and scales. This was my first mobile app and Flutter app. After 2 years in December 2020, I made major changes to the code and revised the project.",
    title: "Music Scales",
    projectType: "Flutter Mobile App",
    date: "12/2018, 12/2020",
    image: MusicScalesImgs,
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.kaya.musicapp",
      appstore: "https://apps.apple.com/us/app/music-scales/id1498463498",
      github: "https://github.com/iberatkaya/music-scales",
    },
  },
  {
    body: "Ad Earnings is a iOS and watchOS App made with Swift and Swift UI. It displays AdMob analytics of a user such as their estimated earnings or clicks in a given date range. Developed using WatchConnectivity to communicate between the watchOS App and the iOS App.",
    title: "Ad Earnings",
    projectType: "SwiftUI - iOS & watchOS App",
    date: "12/2020",
    image: AdEarningsImgs,
    links: {
      appstore: "https://apps.apple.com/us/app/ad-earnings/id1544731062",
      github: "https://github.com/iberatkaya/adearnings",
    },
  },
  {
    body: "Image Editor is a simple tool that can resize images to desired dimensions, can make images grayscale, and can apply Gaussian blur to images. It was built with Vapor for the Backend as a REST API, and React.js for the Frontend as a Web App.",
    title: "Image Editor",
    projectType: "Vapor - React",
    date: "12/2020",
    imagePadding: "0",
    image: ImageEditorImgs,
    links: {
      weburl: "https://iberatkaya.github.io/image-editor",
      github: "https://github.com/iberatkaya/image-editor",
    },
  },
  {
    body: "Unique Color is an open-source Dart package. It is a simple color generator. It generates a time invariant hex color from a string. Inspired by the string-to-color NPM Package by @Gustu.",
    code: `//Generate a time invariant color
String color1 = generateColor("i am a string");
    
//color1 will be equal to color2
String color2 = generateColor("i am a string");

//color3 will be different than color1 and color2
String color3 = generateColor("i am a different string");
`,
    title: "Unique Color",
    projectType: "Dart Package",
    date: "02/2021",
    links: {
      weburl: "https://pub.dev/packages/unique_color",
      github: "https://github.com/iberatkaya/unique_color",
    },
  },
  {
    body: "Git Watch is a GitHub client app for watchOS. It is a SwiftUI app that uses GitHub's REST API and OAuth authentication.",
    title: "Git Watch",
    projectType: "SwiftUI - iOS & watchOS App",
    date: "03/2021",
    imagePadding: "0",
    image: GitWatchImgs,
    links: {
      appstore: "https://apps.apple.com/us/app/git-watch-github/id1555218889",
      github: "https://github.com/iberatkaya/github-watch",
    },
  },
  {
    body: "Draw Animation is a simple iOS App built with UIKit. It draws circles and rectangles to the screen. You can save the screen and use it as your wallpaper.",
    title: "Draw Animation",
    projectType: "iOS App",
    date: "03/2021",
    imagePadding: "0",
    image: DrawAnimationImgs,
    links: {
      github: "https://github.com/iberatkaya/draw-animation",
    },
  },
  {
    body: "Sponty is a social media platform that lets people with similar interests organize and join spontaneous events. I am a Co-Founder of Sponty. Sponty was developed using Flutter, React.js, Firebase, Google Cloud, and Node.js.",
    title: "Sponty",
    projectType: "Flutter App",
    date: "09/2020 - present",
    imagePadding: "0",
    image: SpontyImgs,
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.sponty.android",
      appstore:
        "https://apps.apple.com/us/app/sponty-spontaneous-events/id1558525532",
      weburl: "https://sponty.app/",
    },
  },
  {
    body: "Simple Notes is an iOS app built with UIKit. I built both the server and the iOS app. The server is a REST API built with Express.js, MongoDB, Passport.js, tsoa, and TypeScript.",
    title: "Simple Notes",
    projectType: "iOS App & Express.js Server",
    date: "04/2021 - 05/2021",
    imagePadding: "0",
    image: NotesImgs,
    links: {
      github: "https://github.com/iberatkaya/notes-server",
      appstore:
        "https://apps.apple.com/us/app/simple-notes-save-notes/id1566712582",
      weburl: "https://ibk-note-app.herokuapp.com/docs/",
    },
  },
  {
    body: "My accepted Apple WWDC 2021 submission named Music Theory and Math. It is an educational Swift Playground that teaches about the Math behind Music Theory. It was built with SwiftUI and Swift Plagrounds.",
    title: "WWDC21 Accepted Submission",
    projectType: "SwiftUI & Swift Playgrounds App",
    date: "04/2020",
    imagePadding: "0",
    image: WWDC21Imgs,
    links: {
      github: "https://github.com/iberatkaya/wwdc21",
    },
  },
  {
    body: "Simple Notes is an iOS app built with UIKit. I built both the server and the iOS app. The server is a REST API built with Express.js, MongoDB, Passport.js, tsoa, and TypeScript.",
    title: "Simple Notes",
    projectType: "iOS App & Express.js Server",
    date: "03/2022",
    imagePadding: "0",
    image: NotesImgs,
    links: {
      github: "https://github.com/iberatkaya/notes-server",
      appstore:
        "https://apps.apple.com/us/app/simple-notes-save-notes/id1566712582",
      weburl: "https://ibk-note-app.herokuapp.com/docs/",
    },
  },
  {
    body: "Weather App is a simple UIKit app that displays the weather forecast. The app is built with programatic UI, Combine, and Auto Layout with a MVVM architecture. The forecast is fetched from the National Weather Service API.",
    title: "Weather App",
    projectType: "UIKit & Combine",
    date: "04/2020",
    imagePadding: "0",
    image: WeatherAppImgs,
    links: {
      github: "https://github.com/iberatkaya/weather-uikit",
    },
  },
].reverse();
