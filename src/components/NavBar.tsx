import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaAppStore,
  FaGooglePlay,
  FaIdCard,
  FaMusic,
  FaMediumM,
  FaReddit,
} from "react-icons/fa";

export default function NavBar() {
  let linkStyle: React.CSSProperties = { fontSize: 18 };
  let iconLinkStyle: React.CSSProperties = { marginRight: 2 };

  let launchLink = (str: string) => window.open(str, "_blank");

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Nav.Link style={linkStyle} href="#/">
        Home
      </Nav.Link>
      <Nav.Link style={linkStyle} href="#/projects">
        Projects
      </Nav.Link>
      <Nav.Link style={linkStyle} href="#/about">
        About
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto" style={{ alignItems: "center" }}>
          <Nav.Link
            style={linkStyle}
            href="cv/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaIdCard size={24} />
          </Nav.Link>
          <Nav.Link
            style={iconLinkStyle}
            onClick={() =>
              launchLink("https://www.linkedin.com/in/ibrahim-berat-kaya/")
            }
          >
            <FaLinkedinIn size={24} />
          </Nav.Link>
          <Nav.Link
            style={iconLinkStyle}
            onClick={() => launchLink("https://github.com/iberatkaya")}
          >
            <FaGithub size={24} />
          </Nav.Link>
          <Nav.Link
            style={iconLinkStyle}
            onClick={() => {
              alert(
                "Please note that currently share my Apple Developer account with my developer friend Selim.\nYou may find my apps with the copyright IBK Apps©."
              );
              launchLink(
                "https://apps.apple.com/us/developer/selim-ustel/id1498230191"
              );
            }}
          >
            <FaAppStore size={24} />
          </Nav.Link>
          <Nav.Link
            style={iconLinkStyle}
            onClick={() =>
              launchLink(
                "https://play.google.com/store/apps/developer?id=IBK+Apps"
              )
            }
          >
            <FaGooglePlay size={24} />
          </Nav.Link>
          <Nav.Link
            style={iconLinkStyle}
            onClick={() => launchLink("https://www.reddit.com/user/iberatkaya")}
          >
            <FaReddit size={24} />
          </Nav.Link>
          <Nav.Link
            style={iconLinkStyle}
            onClick={() => launchLink("https://twitter.com/iberatkaya")}
          >
            <FaTwitter size={24} />
          </Nav.Link>
          <Nav.Link
            style={iconLinkStyle}
            onClick={() => launchLink("https://medium.com/@iberatkaya")}
          >
            <FaMediumM size={24} />
          </Nav.Link>
          <Nav.Link style={iconLinkStyle} href="#/music">
            <FaMusic size={24} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
