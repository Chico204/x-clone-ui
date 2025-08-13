"use client";
import { Video } from '@imagekit/next';

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

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