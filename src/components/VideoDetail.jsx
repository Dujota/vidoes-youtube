import React from 'react';

const VideoDetail = ({ video }) => {
  // if video is null (initial state) then just put up a loading notice
  if (!video) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
