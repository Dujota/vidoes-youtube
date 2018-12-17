import React from 'react';

const VideoItem = ({ video }) => {
  const { title, thumbnails } = video.snippet;
  return (
    <div>
      <img src={thumbnails.medium.url} alt={title} />
      {title}
    </div>
  );
};
export default VideoItem;
