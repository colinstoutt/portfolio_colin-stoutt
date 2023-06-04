import React from "react";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import Image from "next/image";

const ProjectCard = ({ title, desc, image, skills, live, github }) => {
  return (
    <div className="projects__section-project">
      <h2 className="projects__section-project-title">{title}</h2>
      <div>
        <p className="projects__section-project-desc">
          {desc}
          <Image
            width={0}
            height={0}
            sizes="100vw"
            contain
            src={image}
            className="mobile-img"
            alt={title}
            style={{
              marginLeft: "auto",
              borderRadius: "5px",
              objectFit: "contain",
              marginTop: "1rem",
              zIndex: "-1",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              width: "100%",
              height: "auto",
            }}
          />
        </p>
      </div>

      <ul className="projects__section-project-tech">
        {skills.map((skill) => {
          return <li className="projects__section-project-tech">{skill}</li>;
        })}
      </ul>

      <div className="projects__section-project-links">
        <a href={github}>
          <CodeRoundedIcon style={{ fontSize: "1.2rem" }} />
          <p>Code</p>
        </a>
        <a href={live}>
          <LaunchRoundedIcon style={{ fontSize: "1rem" }} />
          <p>Live Link</p>
        </a>
      </div>
      <Image
        src={image}
        className="projects__section-project-image"
        alt={title}
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
  );
};

export default ProjectCard;
