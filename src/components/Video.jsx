import React from "react";
import { Player } from "video-react";
import video from "../assets/video_1.mp4";
// import "~video-react/dist/video-react.css";

export default function Favourites({ url }) {
  return (
    <div className="fav">
      <Player>
        <source src={url} />
      </Player>
      <h1 style={{ color: "white", paddingLeft: "20px" }}>Title</h1>
    </div>
  );
}
