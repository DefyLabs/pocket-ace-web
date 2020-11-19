import React from "react";
import backgroundImage from "../assets/images/bg_secondary.svg";
import FeatureMain from "../assets/images/feature_images/main.png";
import FeatureMainMedium from "../assets/images/feature_images/main@2x.png";
import FeatureMainHigh from "../assets/images/feature_images/main@3x.png";
import Picture from "../Components/Picture";

const Features1 = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="h-full w-full flex flex-col sm:flex-row items-center justify-center">
      <div className="h-1/2 sm:h-full w-full sm:w-3/5 flex items-center">
        <Picture
          Low={FeatureMain}
          Medium={FeatureMainMedium}
          High={FeatureMainHigh}
          className="max-h-8/10 mx-auto max-w-9/10"
        />
      </div>
      <div className="sm:h-full w-full sm:w-2/5 flex items-center justify-center sm:justify-start">
        <div className="w-3/5">
          <div className="font-bold text-lg sm:text-5xl">
            언제 어디서나 토익
          </div>
          <div className="mt-10 text-sm sm:text-2xl">내손안의 토익.</div>
          <div className="mt-10 text-sm sm:text-2xl">
            13000여개가 넘는 토익문제들이 내손
            <br className="hidden sm:block" />
            안에 있으니 전철에서도 도서관에서도
            <br className="hidden sm:block" />
            편하게 사용 할수 있어요.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features1;
