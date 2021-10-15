import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

import data from "./data.js";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recomended</h2>

      <div className="recommendedVideos__videos">
        {data.cardData.map((video) => (
          <VideoCard
            title={video.title}
            views={video.views}
            timestamp={video.timestamp}
            channelImage={video.channelImage}
            channel={video.channel}
            image={video.image}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
