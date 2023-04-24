import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CONST from "../constant";

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
      const data = {
        username: displayName,
        password: password,
        email: email,
        role: 'user'
      };
      
      axios.post(CONST.API+'/api/auth/signup', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {

         console.log(response.data);

          navigate("/login");
          console.log("then", response.status);
        })
        .catch(error => {
          console.log("error");
          window.alert("Error Check Details")
        });
      
      
      
      
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
