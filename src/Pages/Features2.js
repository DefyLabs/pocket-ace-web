import React from "react";
import backgroundImage from "../assets/images/bg_company.svg";

const Features1 = () => (
  <div
    className="section h-full bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="w-full h-full flex flex-col items-center justify-center text-primary text-center p-10">
      <div className="font-extrabold text-4xl sm:text-6xl font-nunito">
        TOEIC to go.
      </div>
      <div className="hidden sm:block text-3xl sm:text-5xl font-noto-sans-kr">
        토익.
      </div>
      <div className="text-white leading-loose flex flex-row flex-wrap mt-10 items-start justify-center text-left">
        <div className="text-sm m-5 w-mobile">
          Who says test prep has to be boring? Pocket Ace makes studying for the
          TOEIC an engaging, entertaining experience. Track your progress as you
          level up your accuracy and knowledge. Improve your score with quick,
          casual lessons anytime, anywhere.
        </div>
        <div className="text-sm m-5 w-mobile">
          시험 준비는 지루해야 한다고 누가 그랬던가! 포켓 에이스는 토익 공부를
          흥미롭고 재미있는 경험으로 만듭니다. 정답률과 지식을 향상시키며 진행
          상황을 추적하세요. 언제 어디서나 빠르고 간편한 레슨을 통해 점수를
          높이세요.
        </div>
      </div>
    </div>
  </div>
);

export default Features1;
