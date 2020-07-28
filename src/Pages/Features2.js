import React from "react";
import backgroundImage from "../assets/images/bg_features_2.svg";

const Features2 = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="w-full text-center text-secondary">
      <div className="font-extrabold text-4xl sm:text-6xl font-nunito">
        Features Header.
      </div>
      <div className="hidden sm:block text-3xl sm:text-5xl font-noto-sans-kr">
        일시적입니다.
      </div>
      <div className="w-full text-left flex flex-row flex-wrap justify-center">
        <div className="mt-5 sm:mt-10 mx-5 font-nunito w-mobile">
          <div className="text-lg font-black">Effective</div>
          <div className="text-sm text-type leading-loose">
            Powered by trusted material from Pagoda for quality assurance.
          </div>
        </div>
        <div className="mt-5 sm:mt-10 mx-5 w-mobile">
          <div className="text-lg font-bold">효과적</div>
          <div className="text-sm text-type leading-loose">
            파고다로부터 신뢰받는 자료로 믿을수 있는 양질의 정보 제공.
          </div>
        </div>
      </div>
      <div className="w-full text-left flex flex-row flex-wrap justify-center">
        <div className="mt-5 sm:mt-10 mx-5 font-nunito w-mobile">
          <div className="text-lg font-black">Rewarding</div>
          <div className="text-sm text-type leading-loose">
            Earn achievements and levels based on performance and experience.
          </div>
        </div>
        <div className="mt-5 sm:mt-10 mx-5 w-mobile">
          <div className="text-lg font-bold">보람 있는</div>
          <div className="text-sm text-type leading-loose">
            실적과 경험에 기반한 성과와 레벨을 얻게된다.
          </div>
        </div>
      </div>
      <div className="w-full text-left flex flex-row flex-wrap justify-center">
        <div className="mt-5 sm:mt-10 mx-5 font-nunito w-mobile">
          <div className="text-lg font-black">Motivating</div>
          <div className="text-sm text-type leading-loose">
            Set and reach targets and goals for sustained growth and
            improvement.
          </div>
        </div>
        <div className="mt-5 sm:mt-10 mx-5 w-mobile">
          <div className="text-lg font-bold">동기 부여</div>
          <div className="text-sm text-type leading-loose">
            지속적인 성장과 개선을 위한 목표를 설정하고 달성한다.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features2;
