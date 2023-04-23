import React from "react";
import logo from "../assets/bg.jpg";

export default function ContinueWatching() {
  return (
    <div className="continue">
      <h1>Continue Wacthing</h1>
      <div className="slides">
        <img src={logo} alt="image" />
        <h3>Title</h3>
        <h4>Description</h4>
      </div>
    </div>
  );
}
