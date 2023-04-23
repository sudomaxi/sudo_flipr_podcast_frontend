import React from "react";
import Search from "./Search";
import ContinueWacthing from "./ContinueWatching";
import Trending from "./Trending";
import LikedVideos from "./LikedVideos";

export default function Dashboard() {
  return (
    <div className="parent" style={{ width: "100%" }}>
      <Search />
      <ContinueWacthing />
      <Trending />
      <LikedVideos />
    </div>
  );
}
