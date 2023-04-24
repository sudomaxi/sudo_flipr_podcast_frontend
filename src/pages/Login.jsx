import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CONST from "../constant";


export default function Login({ setCurrentUser }) {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    setCurrentUser(true);

    try {
      const data = {
        username: email,
        password: password
      };
      
      axios.post(CONST.API+'/api/auth/signin', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response.data);
          console.log(response.data.accessToken);
          localStorage.setItem("access-token",response.data.accessToken)
          localStorage.setItem("refresh-token",response.data.refreshToken)
          localStorage.setItem("userId",response.data._id)
          

          navigate("/");
        })
        .catch(error => {
          window.alert('Login Error! Check Details');
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
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Username" />
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
