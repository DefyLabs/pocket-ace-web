import React from "react";
import backgroundImage from "../assets/images/bg_intro.svg";
import Logo from "../assets/images/logo.png";
import LogoMedium from "../assets/images/logo@2x.png";
import LogoHigh from "../assets/images/logo@3x.png";
import AppStoreBadge from "../assets/images/appStoreBadge.png";
import AppStoreBadgeMedium from "../assets/images/appStoreBadge@2x.png";
import AppStoreBadgeHigh from "../assets/images/appStoreBadge@3x.png";
import PlayStoreBadge from "../assets/images/playStoreBadge.png";
import PlayStoreBadgeMedium from "../assets/images/playStoreBadge@2x.png";
import PlayStoreBadgeHigh from "../assets/images/playStoreBadge@3x.png";

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
        <div className="flex items-center justify-center mt-6">
          <a href="https://apps.apple.com/us/app/pocket-ace/id1526786642">
            <picture>
              <source
                srcSet={`${AppStoreBadge} 1x`}
                media="(max-width: 360px)"
              />
              <img
                srcSet={`${AppStoreBadgeMedium} 2x, ${AppStoreBadgeHigh} 3x`}
                alt=""
                className="mr-3 h-12"
              />
            </picture>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.pocketacern">
            <picture>
              <source
                srcSet={`${PlayStoreBadge} 1x`}
                media="(max-width: 360px)"
              />
              <img
                srcSet={`${PlayStoreBadgeMedium} 2x, ${PlayStoreBadgeHigh} 3x`}
                alt=""
                className="ml-3 h-12"
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
