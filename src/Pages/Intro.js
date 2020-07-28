import React from "react";
import backgroundImage from "../assets/images/bg_intro.svg";
import Logo from "../assets/images/logo.png";
import LogoMedium from "../assets/images/logo@2x.png";
import LogoHigh from "../assets/images/logo@3x.png";

const Intro = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full text-center px-5">
        <picture>
          <source srcSet={`${Logo} 1x`} media="(max-width: 360px)" />
          <img
            srcSet={`${LogoMedium} 2x, ${LogoHigh} 3x`}
            alt=""
            className="w-mobile mx-auto"
          />
        </picture>
        <div className="text-primary font-extrabold text-4xl sm:text-6xl font-nunito">
          Treat your brain.
        </div>
        <div className="hidden sm:block text-secondary text-3xl sm:text-5xl font-noto-sans-kr">
          당신의 뇌를 관리하세요.
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
