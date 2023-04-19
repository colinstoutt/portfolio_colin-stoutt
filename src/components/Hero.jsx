import React from "react";
import { Link } from "react-scroll";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const Hero = () => {
  return (
    <>
      <main className="index">
        <div className="index__text">
          <h1 className="index__name fade-in-image">colinStoutt</h1>
          <h1 className="index__title fade-in-image">softwareDeveloper</h1>
        </div>
        <Link
          to="about"
          className="nav__link fade-in-image"
          smooth={true}
          offset={-30}
          duration={500}
        >
          <ExpandMoreRoundedIcon
            sx={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "lightgrey",
              fontSize: "3rem",
            }}
          />
        </Link>
      </main>
    </>
  );
};

export default Hero;
