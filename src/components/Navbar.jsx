import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { color } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <>
      <div className="nav">
        <Link className="nav__name-link" href="/">
          <span className="nav__name">Colin Stoutt</span>
        </Link>
        <div>
          <Link
            href="/about"
            className="nav__link"
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
            className="nav__link"
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
            className="nav__link"
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
      <div className="nav-social-links">
        <div className="nav-social-links__line"></div>
        <a className="nav__social-link" href="https://github.com/colinstoutt">
          <GitHubIcon sx={{ fontSize: "2.5rem" }} />
        </a>
        <a
          className="nav__social-link nav__social-link-linkedin"
          href="https://www.linkedin.com/in/colin-stoutt/"
        >
          <LinkedInIcon sx={{ fontSize: "2.5rem", marginLeft: "0.5rem" }} />
        </a>
        <div className="nav-social-links__line"></div>
      </div>
    </>
  );
};

export default Nav;
