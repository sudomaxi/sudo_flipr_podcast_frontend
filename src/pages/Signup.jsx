import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup({ setCurrentUser }) {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    setCurrentUser(true);

    try {
      //signup function
      navigate("/");
    } catch (err) {
      setErr(true);
      alert(err.message);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Podcasts</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Display name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <button disabled={loading}>Sign up</button>
          {loading && "Signing Up ..."}
          {err && <span>Something went wrong!</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
