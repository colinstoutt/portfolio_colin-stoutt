import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <main className="footer">
      <div className="footer__icons">
        <GitHubIcon sx={{ color: "white", fontSize: "2.5rem" }} />
        <LinkedInIcon />
      </div>
    </main>
  );
};

export default Footer;
