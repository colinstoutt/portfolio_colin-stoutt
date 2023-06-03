import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import ProjectCardReverse from "./ProjectCardReverse";

const Projects = () => {
  return (
    <main className="projects container" id="projects">
      <h1 className="projects__heading heading">
        Featured Projects<div className="line"></div>
      </h1>
      <ProjectCard
        title="Digital Golf Scorecard"
        desc="A web app for keeping track of rounds of golf. Create, edit, and
            view all rounds in one place to help track progress."
        image="https://i.imgur.com/kPy8oYi.png"
        skills={["EJS", "Express", "Mongoose", "MongoDB", "Sessions"]}
        live="https://my-golf-log.herokuapp.com/tracker"
        github="https://github.com/colinstoutt/Golfers-Log"
      />

      <ProjectCardReverse
        title="Team Manager"
        desc="A React desktop application built to manage a sports team's players,
        recruitment, and game schedule, with Javascript Web Tokens employed
        for authentication purposes."
        image="https://i.imgur.com/XJ1tgfy.png"
        skills={["React", "Express", "Mongoose", "MongoDB"]}
        live="https://vermillion-khapse-53bfce.netlify.app/"
        github="https://github.com/colinstoutt/team-manager"
      />
      <ProjectCard
        title="Recipe Book"
        desc="NextJS-based React application that employs server-side rendering,
        utilizes Typescript, and adopts a mobile-first design philosophy for
        styling."
        image="https://i.imgur.com/2yQGxSN.png"
        skills={["NextJS", "React", "Typescript", "MongoDB"]}
        live="https://capstone-cookbook-application.netlify.app/"
        github="https://github.com/colinstoutt/nextJs-ts-cookbook"
      />
    </main>
  );
};

export default Projects;
