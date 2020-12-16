import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GMCImg from "../imgs/experience/gmc.png";
import NacsoftImg from "../imgs/experience/nacsoft.png";
import ACMImg from "../imgs/experience/acm.png";
import { Experience as IExperience } from "../interfaces/experience";
import Interweave from "interweave";
import "./Experience.css";

export default function Experience() {
  const experiences: IExperience[] = [
    {
      title: "React Native Instructor",
      date: "Oct 2019 - Dec 2019",
      description:
        "Gave an 6 week app development tutorial with React Native course at ITU's ACM Student Chapter. Taught attendees about JavaScript, basics React Native, React Navigation, and information about the Google Play Store and App Store.",
      image: ACMImg,
      location: "Istanbul, Turkey",
      subtitle: "ITU ACM Student Chapter",
      companyLink: "https://ituacm.com/",
    },
    {
      title: "Mobile Application Developer",
      date: "Jun 2019 - Jan 2020, Part Time",
      description:
        'Developed a Turkish receipt scanner mobile application with React Native named i-expense available at the <a href="https://play.google.com/store/apps/details?id=com.nacsoft.iexpense" target="_blank" rel="noopener noreferrer">Play Store</a> and <a href="https://apps.apple.com/app/i-expense/id1488919379" target="_blank" rel="noopener noreferrer">App Store</a>. Learned about REST and SOAP API\'s, MySQL, and OCR Technology. Used Google Cloud Vision to scan receipts and developed an algorithm to parse the receipts. Uploaded the parsed receipts to Nacsoft\'s system.',
      image: NacsoftImg,
      location: "Kocaeli, Turkey",
      subtitle: "Nacsoft Yazılım",
      companyLink: "https://www.nacsoft.com.tr/",
      renderAsHTML: true,
    },
    {
      title: "Software Engineer",
      date: "Jun 2020 - Nov 2020, Part Time",
      description:
        '<p>Developing Mobile and Web Applications with Flutter and React. Designing and implementing the Back-End and Database of the applications with Firebase and Node.js. Using Cloud Firestore, Cloud Storage, Cloud Functions, Analytics, and Authentication services of Firebase to develop the apps. Writing Cloud Functions with Node.js and TypeScript.</p> <p>Developed a Mobile and <a href="http://app.unipubs.com/" target="_blank" rel="noopener noreferrer">Web App</a> named UniPubs available on the Play Store (<a href="https://play.google.com/store/apps/details?id=com.customer.unipubs" target="_blank" rel="noopener noreferrer">Student App</a> - <a href="https://play.google.com/store/apps/details?id=com.seller.unipubs" target="_blank" rel="noopener noreferrer">Merchant App</a>) and App Store (<a href="https://apps.apple.com/us/app/unipubs-%C3%B6%C4%9Frenci/id1536918993" target="_blank" rel="noopener noreferrer">Student App</a> - <a href="https://apps.apple.com/us/app/unipubs-sat%C4%B1c%C4%B1-paneli/id1536922228" target="_blank" rel="noopener noreferrer">Merchant App</a>): <ul> <li>UniPubs is an app used in Turkey where students or stationery stores can upload study notes as PDF\'s or images.</li> <li>The uploaded study notes are then sold to users as an open market.</li> <li>UniPubs has an app for users who want to purchase notes and a separete merchant app for users that want to upload study notes and earn money.</li> <li>The main target audience is university students. Users can filter notes based on universities and faculties.</li><li>For the payment system, we used a Turkish payment company named <a href="https://www.iyzico.com/" target="_blank" rel="noopener noreferrer">iyzico</a>.</li></ul></p>',
      image: GMCImg,
      location: "Istanbul, Turkey",
      subtitle: "GMC Teknoloji",
      companyLink: "http://gmcteknoloji.com/",
      renderAsHTML: true,
    },
  ].reverse();

  return (
    <VerticalTimeline>
      {experiences.map((i) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={i.date}
          iconStyle={{ backgroundColor: "white" }}
          icon={
            <img
              src={i.image}
              width="100%"
              height="100%"
              style={{ borderRadius: "50%" }}
              alt={i.subtitle}
            />
          }
        >
          <h3
            style={{ paddingBottom: ".35rem" }}
            className="vertical-timeline-element-title"
          >
            {i.title}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {i.companyLink !== undefined ? (
              <a href={i.companyLink} target="_blank" rel="noopener noreferrer">
                {i.subtitle}
              </a>
            ) : (
              i.subtitle
            )}
          </h5>
          <p>
            {i.renderAsHTML ? (
              <Interweave content={i.description} />
            ) : (
              i.description
            )}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
