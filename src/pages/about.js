import React from "react";

const about = () => {
  return (
    <main className="about">
      <section className="about__section-about">
        <h1 className="heading">A little about me.</h1>
        <p>
          My name is Colin Stoutt, I’m a web developer with a creative edge and
          a strong background in customer service. I recently graduated from
          General Assemblys Software Engineering Immersive.
        </p>
      </section>
      <section className="about__section-skills">
        <h1 className="heading">My skills.</h1>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "#ea6228" }}
        >
          HTML
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "#2762eb" }}
        >
          CSS
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "#c86396" }}
        >
          SCSS
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "#3b78a8" }}
        >
          Python
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "#e9d54d" }}
        >
          Javascript
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "#2f75c0 " }}
        >
          Typescript
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "lightgrey" }}
        >
          NextJS
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "lightgrey" }}
        >
          Express
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "#46a93a" }}
        >
          MongoDB
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "#ac4343" }}
        >
          Mongoose
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "#31638d " }}
        >
          PostgreSQL
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "#2aa474" }}
        >
          Django
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "lightgrey" }}
        >
          Git Version Control
        </span>
        <span
          className="about__section-skills-skill"
          style={{ backgroundColor: "lightgrey" }}
        >
          Github
        </span>
      </section>
    </main>
  );
};

export default about;
