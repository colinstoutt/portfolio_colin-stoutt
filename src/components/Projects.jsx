import React from "react";
import Image from "next/image";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

const Projects = () => {
  return (
    <main className="projects container" id="projects">
      <h1 className="projects__heading heading">
        Featured Projects<div className="line"></div>
      </h1>
      <div className="projects__section-project">
        <h2 className="projects__section-project-title">
          Digital Golf Scorecard
        </h2>
        <div>
          <p className="projects__section-project-desc">
            A web app for keeping track of rounds of golf. Create, edit, and
            view all rounds in one place to help track progress.
            <img
              src="https://i.imgur.com/kPy8oYi.png"
              className="mobile-img"
              alt="Golfers Log App"
              style={{
                marginLeft: "auto",
                borderRadius: "5px",
                objectFit: "contain",
                marginTop: "1rem",
                zIndex: "-1",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            />
          </p>
        </div>

        <ul className="projects__section-project-tech">
          <li className="projects__section-project-tech">EJS</li>
          <li className="projects__section-project-tech">Express</li>
          <li className="projects__section-project-tech">Mongoose</li>
          <li className="projects__section-project-tech">MongoDB</li>
          <li className="projects__section-project-tech">Sessions</li>
          <li className="projects__section-project-tech">Heroku</li>
        </ul>

        <div className="projects__section-project-links">
          <a href="https://github.com/colinstoutt/Golfers-Log">
            <CodeRoundedIcon style={{ fontSize: "1.2rem" }} />
            <p>Code</p>
          </a>
          <a href="https://my-golf-log.herokuapp.com/tracker">
            <LaunchRoundedIcon style={{ fontSize: "1rem" }} />
            <p>Live Link</p>
          </a>
        </div>
        <Image
          src="https://i.imgur.com/kPy8oYi.png"
          className="projects__section-project-image"
          alt="Golfers Log App"
          width={560}
          height={300}
          unoptimized
          style={{
            position: "absolute",
            borderRadius: "5px",
            minWidth: "35rem",
            maxWidth: "10rem",
            opacity: "90%",
            zIndex: "-1",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            right: "0",
            top: "-2rem",
          }}
        />
      </div>
      <div className="projects__section-project">
        <h2 className="projects__section-project-title">Team Manager</h2>
        <p className="projects__section-project-desc-mid">
          A React application built to manage a sports team&apos;s players,
          recruitment, and game schedule, with Javascript Web Tokens employed
          for authentication purposes.
          <img
            src="https://i.imgur.com/XJ1tgfy.png"
            className="mobile-img"
            alt="Team manager app"
            style={{
              marginLeft: "auto",
              borderRadius: "5px",
              objectFit: "contain",
              marginTop: "1rem",
              zIndex: "-1",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          />
        </p>
        <ul className="projects__section-project-tech-mid">
          <li className="projects__section-project-tech-mid">React</li>
          <li className="projects__section-project-tech-mid">Express</li>
          <li className="projects__section-project-tech-mid">MongoDB</li>
          <li className="projects__section-project-tech-mid">Mongoose</li>
          <li className="projects__section-project-tech-mid">JWT</li>
        </ul>
        <div className="projects__section-project-links-mid">
          <a href="https://github.com/colinstoutt/team-manager">
            <CodeRoundedIcon style={{ fontSize: "1.2rem" }} />
            <p>Code</p>
          </a>
          <a href="">
            <LaunchRoundedIcon style={{ fontSize: "1rem" }} />
            <p>Live Link</p>
          </a>
        </div>
        <Image
          src="https://i.imgur.com/XJ1tgfy.png"
          className="projects__section-project-image-mid"
          alt="Team Manager App"
          width={560}
          height={350}
          unoptimized
          style={{
            position: "absolute",
            borderRadius: "5px",
            minWidth: "35rem",
            maxWidth: "10rem",
            opacity: "90%",
            zIndex: "-1",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            right: "0",
            top: "8.5rem",
          }}
        />
      </div>
      <div className="projects__section-project">
        <h2 className="projects__section-project-title">Recipe Book</h2>
        <p className="projects__section-project-desc">
          NextJS-based React application that employs server-side rendering,
          utilizes Typescript, and adopts a mobile-first design philosophy for
          styling.
          <img
            src="https://i.imgur.com/2yQGxSN.png"
            className="mobile-img"
            alt="Recipe book app"
            style={{
              marginLeft: "auto",
              borderRadius: "5px",
              objectFit: "contain",
              marginTop: "1rem",
              zIndex: "-1",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          />
        </p>
        <ul className="projects__section-project-tech">
          <li className="projects__section-project-tech">NextJS</li>
          <li className="projects__section-project-tech">React</li>
          <li className="projects__section-project-tech">Typescript</li>
          <li className="projects__section-project-tech">MongoDB</li>
        </ul>
        <div className="projects__section-project-links">
          <a href="https://github.com/colinstoutt/nextJs-ts-cookbook">
            <CodeRoundedIcon style={{ fontSize: "1.2rem" }} />
            <p>Code</p>
          </a>
          <a href="https://capstone-cookbook-application.netlify.app/">
            <LaunchRoundedIcon style={{ fontSize: "1rem" }} />
            <p>Live Link</p>
          </a>
        </div>
        <Image
          src="https://i.imgur.com/2yQGxSN.png"
          className="projects__section-project-image"
          alt="Golfers Log App"
          width={560}
          height={300}
          unoptimized
          style={{
            position: "absolute",
            borderRadius: "5px",
            minWidth: "35rem",
            maxWidth: "10rem",
            opacity: "90%",
            zIndex: "-1",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            right: "0",
            top: "-2rem",
          }}
        />
      </div>
    </main>
  );
};

export default Projects;
