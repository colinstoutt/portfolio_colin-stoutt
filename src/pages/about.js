import React from "react";

const about = () => {
  return (
    <main className="about container">
      <section className="about__section-about">
        <h1 className="heading">
          A little about me<div className="line"></div>
        </h1>
        <p>
          Hi, I&apos;m Colin Stoutt, a software developer who combines technical
          skills with a creative mindset. I&apos;m a recent graduate of General
          Assembly&apos;s Software Engineering Immersive program.
        </p>
      </section>
      <section className="about__section-skills">
        <h1 className="about__section-skills-heading">Technology</h1>

        <div className="about__section-skills-container">
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid #ea6228" }}
          >
            HTML
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid #2762eb" }}
          >
            CSS
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid #c86396" }}
          >
            SCSS
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid #3b78a8" }}
          >
            Python
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid #e9d54d" }}
          >
            Javascript
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid #2f75c0 " }}
          >
            Typescript
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid lightgrey" }}
          >
            NextJS
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid lightgrey" }}
          >
            Express
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid #46a93a" }}
          >
            MongoDB
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid #ac4343" }}
          >
            Mongoose
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid #31638d " }}
          >
            PostgreSQL
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid #2aa474" }}
          >
            Django
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid lightgrey" }}
          >
            Git Version Control
          </span>
          <span
            className="about__section-skills-skill"
            // style={{ border: "1px solid lightgrey" }}
          >
            Github
          </span>
        </div>
      </section>
    </main>
  );
};

export default about;
