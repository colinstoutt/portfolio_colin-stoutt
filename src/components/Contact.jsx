import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";

const Contact = () => {
  return (
    <main className="contact container" id="contact">
      <h1 className="contact__heading">
        Contact me<div className="line"></div>
      </h1>
      <p>
        If you have any questions or suggestions, please feel free to click the
        link below or send me a message on LinkedIn, and I will respond as
        promptly as possible.
      </p>
      <div className="contact__btns">
        <a href="mailto: colin.stoutt22@gmail.com" className="contact__btn">
          <EmailRoundedIcon sx={{ color: "#111", fontSize: "1rem" }} />
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/colin-stoutt/"
          className="contact__btn"
        >
          <LinkedInIcon sx={{ color: "#111", fontSize: "1rem" }} />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/colinstoutt" className="contact__btn">
          <GitHubIcon sx={{ color: "#111", fontSize: "1rem" }} />
          <span>GitHub</span>
        </a>
        <a
          href="https://docs.google.com/document/d/1bpFiwj-4ScZHgZ2Ap52begEtmb-oISMg/edit?usp=sharing&ouid=113765944755022717453&rtpof=true&sd=true"
          className="contact__btn"
        >
          <ArticleIcon sx={{ color: "#111", fontSize: "1rem" }} />
          <span>Resume</span>
        </a>
      </div>
    </main>
  );
};

export default Contact;
