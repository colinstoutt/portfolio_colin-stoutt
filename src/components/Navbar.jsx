import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  const handleToggle = () => {
    setToggleMobileNav(!toggleMobileNav);
  };

  return (
    <>
      <div className="nav">
        <span className="nav__name fade-in-image">CS</span>
        <div>
          <Link
            to="about"
            className="nav__link fade-in-image"
            spy={true}
            smooth={true}
            offset={-220}
            duration={500}
          >
            About
          </Link>
          <Link
            to="projects"
            className="nav__link fade-in-image"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="nav__link fade-in-image"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="nav-social-links fade-in-image">
        {/* <div className="nav__lightmode fade-in-image">
          {lightMode ? (
            <DarkModeIcon onClick={() => setLightMode(!lightMode)} />
          ) : (
            <LightModeIcon onClick={() => setLightMode(!lightMode)} />
          )}
        </div> */}
        <div className="nav-social-links__line fade-in-image"></div>
        <a className="nav__social-link" href="https://github.com/colinstoutt">
          <GitHubIcon sx={{ fontSize: "2rem" }} />
        </a>
        <a
          className="nav__social-link nav__social-link-linkedin"
          href="https://www.linkedin.com/in/colin-stoutt/"
        >
          <LinkedInIcon sx={{ fontSize: "2rem", marginLeft: "0.5rem" }} />
        </a>
        <div className="nav-social-links__line fade-in-image"></div>
      </div>
      <div className="nav-mobile">
        {toggleMobileNav ? (
          <div className="nav-mobile__active">
            <Link
              to="about"
              className="nav__link fade-in-image"
              smooth={true}
              offset={-30}
              duration={500}
            >
              About
            </Link>
            <Link
              to="projects"
              className="nav__link fade-in-image"
              smooth={true}
              offset={-30}
              duration={500}
            >
              Projects
            </Link>
            <Link
              to="contact"
              className="nav__link fade-in-image"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </div>
        ) : (
          <></>
        )}
        {toggleMobileNav ? (
          <CloseIcon
            onClick={handleToggle}
            sx={{ color: "white", fontSize: "2rem" }}
          />
        ) : (
          <MenuIcon
            onClick={handleToggle}
            sx={{ color: "white", fontSize: "2rem" }}
          />
        )}
      </div>
    </>
  );
};

export default Nav;
