import React from "react";
import backgroundImage from "../assets/images/bg_primary.svg";
import FeatureBookmark from "../assets/images/feature_images/bookmark.png";
import FeatureBookmarkMedium from "../assets/images/feature_images/bookmark@2x.png";
import FeatureBookmarkHigh from "../assets/images/feature_images/bookmark@3x.png";
import Picture from "../Components/Picture";

const Features3 = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="h-full w-full flex flex-col sm:flex-row items-center justify-center">
      <div className="h-1/2 sm:h-full w-full sm:w-3/5 -mt-20 sm:mt-0 flex items-center justify-center">
        <Picture
          Low={FeatureBookmark}
          Medium={FeatureBookmarkMedium}
          High={FeatureBookmarkHigh}
          className="mx-auto sm:max-w-9/10 max-h-8/10"
        />
      </div>
      <div className="sm:h-full w-full sm:w-2/5 flex items-center justify-center sm:justify-start">
        <div className="w-3/5">
          <div className="font-bold text-lg sm:text-5xl">
            언제든지 다시 복습
          </div>
          <div className="mt-10 text-sm sm:text-2xl">틀린 문제는.</div>
          <div className="mt-10 text-sm sm:text-2xl">
            내가 틀렸던 문제들, 헷갈렸던 문제들,
            <br className="hidden sm:block" />
            북마크 기능으로 원할때마다 다시 돌아
            <br className="hidden sm:block" />
            가서 복습할 수 있죠.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features3;
