import React from "react";
import backgroundImage from "../assets/images/bg_features_1.svg";
import { ReactComponent as Feature } from "../assets/images/features_1.svg";

const Features1 = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <Feature className="h-8/10 mx-auto max-w-8/10" />
  </div>
);

export default Features1;
