import React from "react";
import logo from "../assets/bg.jpg";

export default function LikedVideos() {
  const trending = [
    {
      title: "AbcRounded",
      artist: "AbcRounded",
    },
    {
      title: "AbcRounded",
      artist: "AbcRounded",
    },
    {
      title: "AbcRounded",
      artist: "AbcRounded",
    },
    {
      title: "AbcRounded",
      artist: "AbcRounded",
    },
    {
      title: "AbcRounded",
      artist: "AbcRounded",
    },
    {
      title: "AbcRounded",
      artist: "AbcRounded",
    },
    {
      title: "AbcRounded",
      artist: "AbcRounded",
    },
    {
      title: "AbcRounded",
      artist: "AbcRounded",
    },
  ];
  return (
    <div className="continue">
      <h1>Liked Videos</h1>
      <div
        className="scroll"
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "20px",
          overflowX: "scroll",
        }}
      >
        {trending.map((tmp) => {
          return (
            <div className="slides">
              <img src={logo} alt="image" />
              <h3>{tmp.title}</h3>
              <h4>{tmp.artist}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
