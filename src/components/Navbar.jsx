import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

let bgImg = 'https://static.vecteezy.com/system/resources/thumbnails/007/642/164/small/headphone-earphone-headset-for-music-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-vector.jpg'
export default function Navbar() {
  return (
    <div className="Navbox">
      Logo
      <Link to="/">Dashboard</Link>
      <Link to="/admin">Admin</Link>
      Signout
      <div className="logodiv">
        <div className="imgbox" style={{ backgroundImage: `url(${bgImg})` }}></div>
        <div className="imgtext">Username Here</div>
      </div>

    </div>
  );
}
