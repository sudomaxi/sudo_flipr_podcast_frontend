import React from "react";
import Search from "./Search";
import ContinueWacthing from "./ContinueWatching";
import Trending from "./Trending";
import LikedVideos from "./LikedVideos";

export default function Dashboard() {
  return (
    <div>
      <Search />
      <ContinueWacthing />
      <Trending />
      <LikedVideos />
    </div>
  );
}
