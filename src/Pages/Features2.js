import React from "react";
import backgroundImage from "../assets/images/bg_black.svg";
import FeatureProfile from "../assets/images/feature_images/profile.png";
import FeatureProfileMedium from "../assets/images/feature_images/profile@2x.png";
import FeatureProfileHigh from "../assets/images/feature_images/profile@3x.png";
import Picture from "../Components/Picture";

const Features2 = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="h-full w-full flex flex-col sm:flex-row items-center justify-center">
      <div className="sm:h-full w-full sm:w-2/5 flex items-center justify-center sm:justify-end">
        <div className="w-3/5 text-white">
          <div className="font-bold text-lg sm:text-5xl text-secondary">
            나의 페이스로
          </div>
          <div className="mt-10 text-sm sm:text-2xl">나의 실력에 따라.</div>
          <div className="mt-10 text-sm sm:text-2xl">
            내가 직접 난이도를 설정하고 내가
            <br className="hidden sm:block" />
            원하는 페이스로 공부할 수 있어요.
          </div>
        </div>
      </div>
      <div className="h-1/2 sm:h-full w-full sm:w-3/5 flex items-center justify-center">
        <Picture
          Low={FeatureProfile}
          Medium={FeatureProfileMedium}
          High={FeatureProfileHigh}
          className="max-h-8/10 mx-auto max-w-9/10"
        />
      </div>
    </div>
  </div>
);

export default Features2;
