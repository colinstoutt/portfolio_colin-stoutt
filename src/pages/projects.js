import React from "react";
import Image from "next/image";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

const projects = () => {
  return (
    <main className="projects container">
      <h1 className="heading">
        Some things I built<div className="line"></div>
      </h1>
      <div className="projects__section-project">
        <h2 className="projects__section-project-title">Golfers Log</h2>
        <p className="projects__section-project-desc">
          A web app for keeping track of your rounds of golf. Create, edit, and
          view all of your rounds in one place to help track your progress.
        </p>
        <ul className="projects__section-project-tech">
          <li className="projects__section-project-tech">EJS</li>
          <li className="projects__section-project-tech">Express</li>
          <li className="projects__section-project-tech">Mongoose</li>
          <li className="projects__section-project-tech">MongoDB</li>
          <li className="projects__section-project-tech">Sessions</li>
          <li className="projects__section-project-tech">Heroku</li>
        </ul>
        <div className="projects__section-project-links">
          <a href="">
            <CodeRoundedIcon style={{ fontSize: "1.2rem" }} />
            <p>Code</p>
          </a>
          <a href="">
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
            borderRadius: "10px",
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
          A React app to help manage a sports team&apos;s players, recruits, and
          game schedule. Includes authentication using Javascript Web Tokens.
        </p>
        <ul className="projects__section-project-tech-mid">
          <li className="projects__section-project-tech-mid">React</li>
          <li className="projects__section-project-tech-mid">Django</li>
          <li className="projects__section-project-tech-mid">PostgreSQL</li>
          <li className="projects__section-project-tech-mid">JWT</li>
          <li className="projects__section-project-tech-mid">Netlify</li>
        </ul>
        <div className="projects__section-project-links-mid">
          <a href="">
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
            borderRadius: "10px",
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
        <h2 className="projects__section-project-title">
          Another Cookbook App
        </h2>
        <p className="projects__section-project-desc">
          Another cookbook app. Like there isn&apos;t enough already. I built
          this app with the main goal of learning more about NextJS, Typescript,
          and styling with a mobile first approach.
        </p>
        <ul className="projects__section-project-tech">
          <li className="projects__section-project-tech">NextJS</li>
          <li className="projects__section-project-tech">React</li>
          <li className="projects__section-project-tech">Typescript</li>
          <li className="projects__section-project-tech">MongoDB</li>
          <li className="projects__section-project-tech">Vercel</li>
        </ul>
        <div className="projects__section-project-links">
          <a href="">
            <CodeRoundedIcon style={{ fontSize: "1.2rem" }} />
            <p>Code</p>
          </a>
          <a href="">
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
            borderRadius: "10px",
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

export default projects;
