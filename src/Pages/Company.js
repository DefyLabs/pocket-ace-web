import React from "react";
import backgroundImage from "../assets/images/bg_company.svg";

const Company = () => (
  <div
    className="section bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="w-full text-center text-secondary">
      <div className="font-extrabold text-4xl sm:text-6xl text-secondary font-nunito">
        Join the team.
      </div>
      <div className="hidden sm:block text-3xl sm:text-5xl font-noto-sans-kr text-secondary">
        팀에 합류하세요.
      </div>
      <div className="w-full text-left flex flex-row flex-wrap justify-center">
        <div className="mt-10 mx-5 font-nunito w-mobile">
          <div className="text-sm text-primary leading-loose">
            At Pocket Ace, we’re dedicated to creating a fresh, innovative
            approach to educational technology. We believe in our vision of
            blending fun and learning in an accessible way without compromising
            academic integrity.
          </div>
        </div>
        <div className="mt-10 mx-5 w-mobile">
          <div className="text-sm text-primary leading-loose">
            Pocket Ace에서 우리는 교육 기술에 대한 혁신적이고 신선한 접근법을
            만드는 데 전념하고 있습니다. 우리는 순수 학문적인 부분을 훼손하지
            않고 접근 가능한 방법 안에서 재미와 공부를 융합하는 우리의 비전을
            믿습니다.
          </div>
        </div>
      </div>
      <div className="w-full text-left flex flex-row flex-wrap justify-center">
        <div className="mt-10 mx-5 font-nunito w-mobile">
          <div className="text-lg text-secondary font-black">
            Senior Developer
          </div>
          <div className="text-sm text-primary leading-loose">
            Seoul, South Korea or Remote
          </div>
        </div>
        <div className="mt-10 mx-5 w-mobile">
          <div className="text-lg text-secondary font-bold">선임 개발자</div>
          <div className="text-sm text-primary leading-loose">
            서울, 한국 또는 리모트
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Company;
