import React from "react";
import backgroundImage from "../assets/images/bg_black.svg";
import FeatureLeague from "../assets/images/feature_images/league.png";
import FeatureLeagueMedium from "../assets/images/feature_images/league@2x.png";
import FeatureLeagueHigh from "../assets/images/feature_images/league@3x.png";
import Picture from "../Components/Picture";

const Features4 = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="h-full w-full flex flex-col sm:flex-row items-center justify-center">
      <div className="sm:h-full w-full sm:w-2/5 flex items-center justify-center sm:justify-end">
        <div className="w-3/5 text-white">
          <div className="font-bold text-lg sm:text-5xl text-secondary">
            나의 랭킹을 한눈에
          </div>
          <div className="mt-10 text-sm sm:text-2xl">
            토익 고수들 앞에선 초라해지는 나지만,
            <br className="hidden sm:block" />
            하루하루 나아지는 나의 토익을 순위를
            <br className="hidden sm:block" />
            통해 볼 수 있답니다.
          </div>
        </div>
      </div>
      <div className="h-1/2 sm:h-full w-full sm:w-3/5 flex items-center">
        <Picture
          Low={FeatureLeague}
          Medium={FeatureLeagueMedium}
          High={FeatureLeagueHigh}
          className="max-h-8/10 mx-auto max-w-9/10"
        />
      </div>
    </div>
  </div>
);

export default Features4;
