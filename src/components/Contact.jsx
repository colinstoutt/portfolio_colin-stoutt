import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <main className="contact container" id="contact">
      <h1 className="contact__heading">
        Contact me<div className="line"></div>
      </h1>
      <p>
        Have a question or suggestion? Click the link below or message me on
        LinkedIn and I&apos;ll get back to you as soon as possible!
      </p>
      <div className="contact__btns">
        <a href="mailto: colin.stoutt22@gmail.com" className="contact__btn">
          <EmailRoundedIcon sx={{ color: "lightgrey", fontSize: "1rem" }} />
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/colin-stoutt/"
          className="contact__btn"
        >
          <LinkedInIcon sx={{ color: "lightgrey", fontSize: "1rem" }} />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/colinstoutt" className="contact__btn">
          <GitHubIcon sx={{ color: "lightgrey", fontSize: "1rem" }} />
          <span>GitHub</span>
        </a>
      </div>
    </main>
  );
};

export default Contact;
