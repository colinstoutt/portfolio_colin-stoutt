import React from "react";

const about = () => {
  return (
    <main className="about container">
      <section className="about__section-about">
        <h1 className="heading">
          A little about me<div className="line"></div>
        </h1>
        <p>
          My name is Colin Stoutt, I’m a web developer with a creative edge and
          a strong background in customer service. I recently graduated from
          General Assemblys Software Engineering Immersive.
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
