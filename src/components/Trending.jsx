import React from "react";
import logo from "../assets/bg.jpg";
import { AbcOutlined } from "@mui/icons-material";

export default function Trending() {
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
      <h1>Trending</h1>
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
