import React from "react";
import { Link } from "react-scroll";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const Hero = () => {
  return (
    <>
      <main className="index">
        <div className="index__hero">
          <img src="https://i.imgur.com/neM62rY.jpg" alt="colin stoutt" />

          <div className="index__text">
            <h1 className="index__name">colinStoutt</h1>
            <h1 className="index__title">softwareDeveloper</h1>
          </div>
        </div>
        <Link
          to="about"
          className="nav__link"
          smooth={true}
          offset={-80}
          duration={500}
        >
          <ExpandMoreRoundedIcon
            className="mobile"
            sx={{
              position: "absolute",
              bottom: "1.5rem",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "lightgrey",
              fontSize: "4rem",
            }}
          />
        </Link>
      </main>
    </>
  );
};

export default Hero;
