import { Visibility } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { color } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { render } from "react-dom";

const Nav = () => {
  const router = useRouter();
  const [lightMode, setLightMode] = useState(false);

  return (
    <>
      <div className="nav">
        <Link className="nav__name-link fade-in-image" href="/">
          <span className="nav__name">CS</span>
        </Link>
        <div>
          <Link
            href="/about"
            className="nav__link fade-in-image"
            style={
              router.route === "/about"
                ? { color: "white" }
                : { color: "rgb(172, 172, 172)" }
            }
          >
            About
          </Link>
          <Link
            href="/projects"
            className="nav__link fade-in-image"
            style={
              router.route === "/projects"
                ? { color: "white" }
                : { color: "rgb(172, 172, 172)" }
            }
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="nav__link fade-in-image"
            style={
              router.route === "/contact"
                ? { color: "white" }
                : { color: "rgb(172, 172, 172)" }
            }
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="nav-social-links fade-in-image">
        <div className="nav__lightmode fade-in-image">
          {lightMode ? (
            <DarkModeIcon
              onClick={() => setLightMode(!lightMode)}
              style={lightMode ? { color: "#111" } : { color: "grey" }}
            />
          ) : (
            <LightModeIcon
              onClick={() => setLightMode(!lightMode)}
              style={lightMode ? { color: "#111" } : { color: "grey" }}
            />
          )}
        </div>
        <div className="nav-social-links__line fade-in-image"></div>
        <a className="nav__social-link" href="https://github.com/colinstoutt">
          <GitHubIcon sx={{ fontSize: "2.5rem" }} />
        </a>
        <a
          className="nav__social-link nav__social-link-linkedin"
          href="https://www.linkedin.com/in/colin-stoutt/"
        >
          <LinkedInIcon sx={{ fontSize: "2.5rem", marginLeft: "0.5rem" }} />
        </a>
        <div className="nav-social-links__line fade-in-image"></div>
      </div>
    </>
  );
};

export default Nav;
