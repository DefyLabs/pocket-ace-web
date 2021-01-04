import React from "react";
import ReactPlayer from 'react-player/lazy'

const Video = ({ src }) => (
  <div className="h-full w-full flex items-center justify-center">
    <ReactPlayer 
      url={src} 
      controls="true"
      height='100%'
      />
  </div>
);

export default Video;
