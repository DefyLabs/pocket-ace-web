import React from "react";
import backgroundImage from "../assets/images/bg_secondary.svg";

const Company = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="w-full text-center">
      <div className="font-bold text-3xl text-type sm:text-6xl">연락하세요</div>
      <div className="mt-10 font-bold text-xl font-roboto sm:text-xl text-primary">
        info@pocketace.io
      </div>
    </div>
  </div>
);

export default Company;
