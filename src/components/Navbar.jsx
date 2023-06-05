import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <span className="nav__name ">CS</span>
        <div>
          <Link
            to="about"
            className="nav__link "
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            About
          </Link>
          <Link
            to="projects"
            className="nav__link "
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="nav__link "
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contact
          </Link>
          {/* <Link
            to="resume"
            className="nav__link nav__link-resume"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Resume
          </Link> */}
        </div>
      </div>
      <div className="nav-social-links ">
        {/* <div className="nav__lightmode ">
          {lightMode ? (
            <DarkModeIcon onClick={() => setLightMode(!lightMode)} />
          ) : (
            <LightModeIcon onClick={() => setLightMode(!lightMode)} />
          )}
        </div> */}
        <div className="nav-social-links__line "></div>
        <a className="nav__social-link" href="https://github.com/colinstoutt">
          <GitHubIcon sx={{ fontSize: "2rem" }} />
        </a>
        <a
          className="nav__social-link nav__social-link-linkedin"
          href="https://www.linkedin.com/in/colin-stoutt/"
        >
          <LinkedInIcon sx={{ fontSize: "2rem", marginLeft: "0.5rem" }} />
        </a>
        <div className="nav-social-links__line "></div>
      </div>
      <div className="nav-mobile">
        <div className="nav-mobile__active">
          <Link
            to="about"
            className="nav__link "
            smooth={true}
            offset={-80}
            duration={500}
          >
            About
          </Link>
          <Link
            to="projects"
            className="nav__link "
            smooth={true}
            offset={-80}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="nav__link "
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
