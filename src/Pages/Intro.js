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
import Picture from "../Components/Picture";

const Intro = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full text-center px-5">
        <Picture
          Low={Logo}
          Medium={LogoMedium}
          High={LogoHigh}
          className="w-mobile mx-auto"
        />
        <div className="text-primary font-extrabold text-4xl sm:text-6xl font-nunito">
          Treat your brain.
        </div>
        <div className="hidden sm:block text-secondary text-3xl sm:text-5xl font-noto-sans-kr">
          당신의 뇌를 관리하세요.
        </div>
        <div className="flex items-center justify-center mt-6">
          <a href="https://apps.apple.com/us/app/pocket-ace/id1526786642">
            <Picture
              Low={AppStoreBadge}
              Medium={AppStoreBadgeMedium}
              High={AppStoreBadgeHigh}
              className="mr-3 h-12"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.pocketacern">
            <Picture
              Low={PlayStoreBadge}
              Medium={PlayStoreBadgeMedium}
              High={PlayStoreBadgeHigh}
              className="ml-3 h-12"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
