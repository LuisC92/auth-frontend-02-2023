import React, { useState, useContext } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(CurrentUserContext);
  const [userLogin, setUserLogin] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .post("/auth/login", userLogin)
      .then((response) => {
        // console.log(response.data)
        localStorage.setItem("user_token", JSON.stringify(response.data.token));
        setUser(response.data.email);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError(err.response.data);
      });
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        <br />
        <label>Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
      </form>
    </div>
  );
};

export default Login;
