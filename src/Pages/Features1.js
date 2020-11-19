import React from "react";
import { ReactComponent as Feature } from "../assets/images/features_1.svg";
import backgroundImage from "../assets/images/bg_secondary.svg";

const Features1 = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <Feature className="h-8/10 mx-auto max-w-8/10" />
  </div>
);

export default Features1;
