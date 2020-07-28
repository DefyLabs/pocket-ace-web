import React from "react";
import backgroundImage from "../assets/images/bg_intro.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Intro = () => (
  <div
    className="section"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  ></div>
);

export default Intro;
