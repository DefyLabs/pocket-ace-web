import React from "react";
import backgroundImage from "../assets/images/bg_features_2.svg";
import PagodaBooks from "../assets/images/pagodaBooks.png";
import PagodaBooksMedium from "../assets/images/pagodaBooks@2x.png";
import PagodaBooksHigh from "../assets/images/pagodaBooks@3x.png";

const Features3 = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="w-full text-center text-secondary">
      <div className="font-extrabold text-4xl sm:text-6xl font-nunito">
        Bells and whistles.
      </div>
      <div className="hidden sm:block text-3xl sm:text-5xl font-noto-sans-kr">
        부가기능.
      </div>
      <div className="w-full text-left flex flex-row flex-wrap justify-center">
        <div className="mt-5 sm:mt-10 mx-5 font-nunito w-mobile">
          <div className="text-lg font-black">Effective</div>
          <div className="text-sm text-type leading-loose">
            Supported by trusted material from Pagoda Books for quality
            assurance.
          </div>
        </div>
        <div className="mt-5 sm:mt-10 mx-5 w-mobile">
          <div className="text-lg font-bold">효과적</div>
          <div className="text-sm text-type leading-loose">
            Pagoda Books로부터 품질보증된 믿을 수 있는 자료를 지원합니다.
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
            실적과 경험에 합당한 보상과 레벨을 얻을 수 있습니다.
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
            지속적인 성장과 개선을 위해 목표를 설정하고 그것을 달성할 수
            있습니다.
          </div>
        </div>
      </div>
      <div className="text-lg font-black text-secondary font-nunito mt-5 sm:mt-20">
        Powered By:
      </div>
      <picture>
        <source srcSet={`${PagodaBooks} 1x`} media="(max-width: 360px)" />
        <img
          srcSet={`${PagodaBooksMedium} 2x, ${PagodaBooksHigh} 3x`}
          alt=""
          style={{ maxWidth: "360px" }}
          className="mx-auto"
        />
      </picture>
    </div>
  </div>
);

export default Features3;
