import React from 'react';

const VideoDetail = ({ video }) => {
  // if video is null (initial state) then just put up a loading notice
  if (!video) {
    return <div>Loading.....</div>;
  }

  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
