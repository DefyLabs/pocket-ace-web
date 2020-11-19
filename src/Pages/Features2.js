import React from "react";
import backgroundImage from "../assets/images/bg_black.svg";

const Features1 = () => (
  <div
    className="section h-full bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="w-full h-full flex flex-col items-center justify-center text-secondary text-center p-10">
      <div className="font-extrabold text-4xl sm:text-6xl font-nunito">
        TOEIC anytime.
      </div>
      <div className="hidden sm:block text-3xl sm:text-5xl font-noto-sans-kr">
        언제나 토익.
      </div>
      <div className="text-white leading-loose flex flex-row flex-wrap mt-10 items-start justify-center text-left">
        <div className="text-sm m-5 w-mobile" style={{ textIndent: "1rem" }}>
          Pocket Ace makes it fun to boost your TOEIC score. It’s a friendly,
          casual experience that packs a big academic punch and a quick, easy
          way to improve everyday.
        </div>
        <div className="text-sm m-5 w-mobile" style={{ textIndent: "1rem" }}>
          포켓 에이스는 당신의 토익 점수 향상에 재미를 더합니다. 공부에
          매우효과적이며 친근하고 다가가기 쉬워서 매일매일 쉽고 빠르게 증진시킬
          수 있습니다.
        </div>
      </div>
    </div>
  </div>
);

export default Features1;
