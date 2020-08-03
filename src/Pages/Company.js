import React from "react";
import backgroundImage from "../assets/images/bg_company.svg";

const Company = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="w-full text-center">
      <div className="font-extrabold text-4xl sm:text-6xl text-primary font-nunito">
        Join the team.
      </div>
      <div className="hidden sm:block text-3xl sm:text-5xl font-noto-sans-kr text-primary">
        팀에 합류하세요.
      </div>
      <div className="w-full text-left flex flex-row flex-wrap justify-center">
        <div className="mt-5 sm:mt-10 mx-5 font-nunito w-mobile">
          <div
            className="text-sm text-white sm:leading-loose"
            style={{ textIndent: "1rem" }}
          >
            At Pocket Ace, we believe in our vision of blending fun and learning
            in an innovative, accessible way. We’re seeking talented,
            like-minded people who share our passion and energy.
          </div>
        </div>
        <div className="mt-5 sm:mt-10 mx-5 w-mobile">
          <div
            className="text-sm text-white sm:leading-loose"
            style={{ textIndent: "1rem" }}
          >
            우리는 재미와 학습을 보다 혁신적이고 접근하기 쉬운 방법으로
            녹여내고자 하는 우리의 꿈을 믿습니다. 우리는 우리의 열정과 에너지를
            공유할 생각이 비슷한 재능있는 사람들을 찾고 있습니다.
          </div>
        </div>
      </div>
      <div className="w-full text-left flex flex-row flex-wrap justify-center">
        <div className="mt-5 sm:mt-10 mx-5 font-nunito w-mobile">
          <div className="text-lg text-primary font-black">
            Senior Developer
          </div>
          <div className="text-sm text-white sm:leading-loose">
            Seoul, South Korea or Remote
          </div>
        </div>
        <div className="mt-5 sm:mt-10 mx-5 w-mobile">
          <div className="text-lg text-primary font-bold">선임 개발자</div>
          <div className="text-sm text-white sm:leading-loose">
            서울, 한국 또는 리모트
          </div>
        </div>
      </div>
      <div className="text-lg font-black text-secondary font-nunito mt-10 sm:mt-20">
        Contact Us
      </div>
      <div className="text-primary font-nunito">
        <a href="mailto:rich@defylabs.io">rich@defylabs.io</a>
      </div>
    </div>
  </div>
);

export default Company;
