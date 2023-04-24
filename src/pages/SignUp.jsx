import React, { useState } from "react";
import api from "../services/api"
import {useNavigate} from "react-router-dom"
// import axios from "axios"

const SignUp = () => {
  const [userSign, setUserSign] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate()

  const handleChange = (event) => {
    setUserSign({ ...userSign, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(userSign)
    api.post("/auth/sign-up", userSign)
        .then(response => {
            setError(null)
            navigate("/login")
        })
        .catch(err => {
            console.error(err)
            setError(err.response.data)
        })
  }

  return (
    <div>
      <h1>SignUp</h1>

      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        <br />
        <label>Password: </label>
        <input type="password" id="password" name="password" onChange={handleChange} />
        <br />
        <button type="submit">Register</button>
        {error ? <p style={{color:"red"}}>{error}</p> : null}
      </form>
    </div>
  );
};

export default SignUp;
