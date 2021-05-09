import GMCImg from "../imgs/experience/gmc.png";
import NacsoftImg from "../imgs/experience/nacsoft.png";
import ACMImg from "../imgs/experience/acm.png";
import SimitLabImg from "../imgs/experience/s.png";
import SpontyImg from "../imgs/experience/sponty.png";
import { Experience as IExperience } from "../interfaces/experience";

export const experiences: IExperience[] = [
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
      '<p>Developed Mobile and Web Applications with Flutter and React. Designed and implemented the Back-End and Database of the applications with Firebase and Node.js. Used Cloud Firestore, Cloud Storage, Cloud Functions, Analytics, and Authentication services of Firebase to develop the apps. Wrote Cloud Functions with Node.js and TypeScript.</p> <p>Developed a Mobile and <a href="http://app.unipubs.com/" target="_blank" rel="noopener noreferrer">Web App</a> named UniPubs available on the Play Store (<a href="https://play.google.com/store/apps/details?id=com.customer.unipubs" target="_blank" rel="noopener noreferrer">Student App</a>) and App Store (<a href="https://apps.apple.com/us/app/unipubs-%C3%B6%C4%9Frenci/id1536918993" target="_blank" rel="noopener noreferrer">Student App</a>): <ul> <li>UniPubs is an app used in Turkey where students or stationery stores can upload study notes as PDF\'s or images.</li> <li>The uploaded study notes are then sold to users as an open market.</li> <li>UniPubs has an app for users who want to purchase notes and a separete merchant app for users that want to upload study notes and earn money. The merchant app was released but later removed.</li> <li>The main target audience is university students. Users can filter notes based on universities and faculties.</li><li>For the payment system, we used a Turkish payment company named <a href="https://www.iyzico.com/" target="_blank" rel="noopener noreferrer">iyzico</a>.</li></ul></p>',
    image: GMCImg,
    location: "Istanbul, Turkey",
    subtitle: "GMC Teknoloji",
    companyLink: "http://gmcteknoloji.com/",
    renderAsHTML: true,
  },
  {
    title: "Undergraduate Researcher",
    date: "March 2020 - Present",
    description:
      'Working on my Graduation Project which is "Face Mask Detection On Public Transportation" with my advisor Prof. Dr. Hazım Kemal EKENEL.',
    location: "Istanbul, Turkey",
    subtitle: "SiMiT Lab",
    image: SimitLabImg,
    companyLink: "https://simitlab.itu.edu.tr",
    renderAsHTML: false,
  },
  {
    title: "Co-Founder & Software Developer",
    date: "September 2020 - Present",
    description:
      '<p>Sponty is a social media platform that lets people with similar interests organize and join spontaneous events. Sponty is available on the <a href="https://apps.apple.com/us/app/sponty-spontaneous-events/id1558525532" target="_blank" rel="noopener noreferrer">App Store</a> and the <a href="https://play.google.com/store/apps/details?id=com.sponty.android" target="_blank" rel="noopener noreferrer">Play Store</a>.</p> <p>I am one of the founding members of Sponty. Sponty is developing the Mobile App using Flutter, the Web Page using React.js, and the Back-End using Firebase, Google Cloud, and Node.js.</p><p>Features:<ul><li>Users can record videos to create and join events.</li><li>Users in the same event can chat.</li><li>Users can see events and other users on the map.</li></ul></p>',
    location: "Istanbul, Turkey",
    subtitle: "Sponty",
    image: SpontyImg,
    companyLink: "https://sponty.app",
    renderAsHTML: true,
  },
].reverse();
