import React from "react";
import { Avatar } from "@material-ui/core";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  console.log("tituleo", channel, views);
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />

      <div className="videoCard__info">
        <Avatar
          className="videoCArd__avatar"
          alt={channel}
          src={channelImage}
        />

        <div className="videoCard__text">
          <h4>{title}</h4>

          <p>{channel}</p>
          <p>{views} visualizações</p>
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
