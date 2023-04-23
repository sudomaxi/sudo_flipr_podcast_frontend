import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import "../styles/navbar.css";
import Player from "./Player";

let bgImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR59nOLSOry-Txc9i2RkaCp5WcuT_zXLHxvyfR2wxA8cuxpf2BhnhKYbNLzDuRwp-wX1ec&usqp=CAU";

const playlist = [
  {
    title: "My Playlist",
    imgUrl: "",
    list: [
      {
        title: "Abhishree Interview",
        url: "",
        img: "",
      },
      {
        title: "E saal cup na de",
        url: "",
        img: "",
      },
    ],
  },
  {
    title: "My Playlist",
    imgUrl: "",
    list: [
      {
        title: "Abhishree Interview",
        url: "",
        img: "",
      },
      {
        title: "E saal cup na de",
        url: "",
        img: "",
      },
    ],
  },
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  return (
    <div className="Navbox">
      {/* Logo
      <Link to="/">Dashboard</Link>
      <Link to="/admin">Admin</Link>
      Signout */}
      <div className="logodiv">
        <div
          className="imgbox"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <div className="imgtext">Anmol</div>
      </div>

      <div className="line"></div>
      <div className="navmenu-listbox">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className={active === 2 ? "menu-item active" : "menu-item bg-line"}
            onClick={() => setActive(2)}
          >
            <DashboardIcon />
            Dashboard
          </div>
        </Link>
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <div
            className={active === 1 ? "menu-item active" : "menu-item"}
            onClick={() => setActive(1)}
          >
            <AdminPanelSettingsIcon />
            Admin
          </div>
        </Link>

        <div
          className={active === 3 ? "menu-item active" : "menu-item"}
          onClick={() => setActive(3)}
        >
          <FavoriteIcon />
          Favourites
        </div>
        <div
          className={active === 4 ? "menu-item active" : "menu-item"}
          onClick={() => setActive(4)}
        >
          <PlaylistAddIcon />
          Playlists
        </div>
      </div>
      <div className="line"></div>
      <Player />
    </div>
  );
}
