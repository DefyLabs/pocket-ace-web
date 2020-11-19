import React from "react";

const Picture = ({ Low, Medium, High, className }) => (
  <picture className="h-full w-full flex items-center justify-center">
    <source srcSet={`${Low} 1x`} media="(max-width: 360px)" />
    <img srcSet={`${Medium} 2x, ${High} 3x`} alt="" className={className} />
  </picture>
);

export default Picture;
