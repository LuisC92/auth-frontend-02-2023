import React, {useState} from "react";
import api from "../services/api";

const ForgetPassword = () => {
    const [email, setEmail] = useState();
    const [error, setError] = useState();

    const handleChange = (event) => {
        setEmail({ ...email, [event.target.name]: event.target.value });
      };

      const handleSubmit = (event) => {

        event.preventDefault()
        api.post("/auth/forget-password", email)
            .then(response => console.log(response))
            .catch(error => console.error(error))
      }

  return (
    <div>
      <h1>Forget Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Send Email</button>
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
      </form>
    </div>
  );
};

export default ForgetPassword;
