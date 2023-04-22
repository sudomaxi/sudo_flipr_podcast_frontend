import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setCurrentUser }) {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    setCurrentUser(email);

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
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <button>Sign in</button>
          {err && <span>Something went wrong! </span>}
        </form>
        <p>
          You don't have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
    </div>
  );
}
