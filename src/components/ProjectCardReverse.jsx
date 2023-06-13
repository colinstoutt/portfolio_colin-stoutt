import React from "react";
import Image from "next/image";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

const ProjectCardReverse = ({ title, desc, image, skills, live, github }) => {
  return (
    <div className="projects__section-project">
      <h2 className="projects__section-project-title-reverse">{title}</h2>
      <p className="projects__section-project-desc-reverse">
        {desc}
        <Image
          priority
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

            width: "100%",
            height: "auto",
          }}
        />
      </p>
      <ul className="projects__section-project-tech-reverse">
        {skills.map((skill, index) => {
          return (
            <li key={index} className="projects__section-project-tech-reverse">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="projects__section-project-links-reverse">
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
        priority
        src={image}
        className="projects__section-project-image-reverse"
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
