import React from "react";
import Image from "next/image";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

const ProjectCardReverse = ({ title, desc, image, skills, live, github }) => {
  return (
    <div className="projects__section-project">
      <h2 className="projects__section-project-title-mid">{title}</h2>
      <p className="projects__section-project-desc-mid">
        {desc}
        <Image
          width={400}
          height={210}
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
          }}
        />
      </p>
      <ul className="projects__section-project-tech-mid">
        {skills.map((skill) => {
          return (
            <li className="projects__section-project-tech-mid">{skill}</li>
          );
        })}
      </ul>
      <div className="projects__section-project-links-mid">
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
        className="projects__section-project-image-mid"
        alt={title}
        width={560}
        height={350}
        unoptimized
        style={{
          borderRadius: "5px",
          minWidth: "35rem",
          maxWidth: "10rem",
          opacity: "90%",
        }}
      />
    </div>
  );
};

export default ProjectCardReverse;
