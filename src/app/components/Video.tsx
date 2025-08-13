"use client";




type VideoTypes = {
  path: string;
  className?: string;
};

const Video = ({ path, className }: VideoTypes) => {
  return (
    <Video
     // src={path}
      //urlEndpoint={urlEndpoint}
      path={path}
      className={className}
    
    
    />
  );
};

export default Video;