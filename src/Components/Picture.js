import React from "react";

const Picture = ({ Low, Medium, High, className }) => (
  <picture>
    <source srcSet={`${Low} 1x`} media="(max-width: 360px)" />
    <img srcSet={`${Medium} 2x, ${High} 3x`} alt="" className={className} />
  </picture>
);

export default Picture;
