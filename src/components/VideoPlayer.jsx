import React from "react";
import Video from "../assests/UniversityVideo.mp4";
import "../styles/VideoPlayer.css";
import { useRef } from "react";

function VideoPlayer({ Play, SetPlay }) {
  const Player = useRef(null);

  const closePlayer = (event) => {
    if (event.target === Player.current) {
      SetPlay(false);
    }
  };

  return (
    <div
      className={`video-player ${Play ? "" : "hide"}`}
      ref={Player}
      onClick={closePlayer}
    >
      <video src={Video} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer;
