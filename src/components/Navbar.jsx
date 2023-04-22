import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      Logo
      <Link to="/">Dashboard</Link>
      <Link to="/admin">Admin</Link>
      Signout
    </div>
  );
}
