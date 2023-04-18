import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const Contact = () => {
  return (
    <main className="contact container" id="contact">
      <h1 className="contact__heading">
        Contact me<div className="line"></div>
      </h1>
      <p>
        Have a question or suggestion? Click the link below or message me on
        LinkedIn and I'll get back to you as soon as possible!
      </p>
      <a href="mailto: colin.stoutt22@gmail.com" className="contact__btn">
        <EmailRoundedIcon sx={{ color: "white", fontSize: "1rem" }} />
        <span>Email</span>
      </a>
    </main>
  );
};

export default Contact;
