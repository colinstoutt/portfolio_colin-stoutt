import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <main className="about container" id="about">
      <section className="about__section-about">
        <h1 className="heading">
          A little about me<div className="line"></div>
        </h1>
        <p>
          Hi, my name is Colin Stoutt, I&apos;m a self-motivated front-end
          developer who combines technical skills with a creative mindset.
          Before diving into tech, I spent 5 years in customer service where I
          have honed my communication and team-building skills. I graduated from
          General Assembly&apos;s Software Engineering Immersive program and
          I&apos;m ready to use my skills and experience to make a real
          difference in a new career path.
        </p>
      </section>
      <section className="about__section-skills">
        <h1 className="about__section-skills-heading">Technology</h1>

        <div className="about__section-skills-container">
          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid #ea6228" }}
          >
            HTML
          </span>

          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid #2762eb" }}
          >
            CSS
          </span>

          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid #c86396" }}
          >
            SCSS
          </span>

          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid #3b78a8" }}
          >
            Python
          </span>

          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid #e9d54d" }}
          >
            Javascript
          </span>

          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid #2f75c0 " }}
          >
            Typescript
          </span>
          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid lightgrey" }}
          >
            NextJS
          </span>
          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid lightgrey" }}
          >
            Express
          </span>

          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid #46a93a" }}
          >
            MongoDB
          </span>
          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid #ac4343" }}
          >
            Mongoose
          </span>

          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid #31638d " }}
          >
            PostgreSQL
          </span>

          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid #2aa474" }}
          >
            Django
          </span>

          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid lightgrey" }}
          >
            Git Version Control
          </span>
          <span
            className="about__section-skills-skill"
            style={{ border: "1px solid lightgrey" }}
          >
            Github
          </span>
        </div>
      </section>
    </main>
  );
};

export default About;
