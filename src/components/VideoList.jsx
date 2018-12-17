import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  // first map over the array result and then save it to a variable
  const renderedList = videos.map(video => {
    console.log(video);
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  // Then we render to the page by passing the variable result to the return statement
  return <div>{renderedList}</div>;
};

export default VideoList;
