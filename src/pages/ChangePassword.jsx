import React, {useState, useContext} from "react";
import api from "../services/api";
import CurrentUserContext from "../context/UserContext";

const ChangePassword = () => {
  const [passwords, setPasswords] = useState();
  const [error, setError] = useState();
  const {token} = useContext(CurrentUserContext);


  const handleChange = (event) => {
    setPasswords({ ...passwords, [event.target.name]: event.target.value });
  };
// console.log(passwords)

  const handleSubmit = (event) => {

    let config = {
        headers:{
            "Authorization": "Bearer " + token
        }
    }

    event.preventDefault()
    api.post("/auth/change-password", passwords, config)
        .then(response => console.log(response))
        .catch(error => console.error(error))
  }


  return (
    <div>
      <h1>ChangePassword</h1>

      <form onSubmit={handleSubmit}>
        <label>Current Password: </label>
        <input type="password" id="currentPassword" name="currentPassword" onChange={handleChange} />
        <br />
        <label>New Password: </label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Change Password</button>
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
      </form>
    </div>
  );
};

export default ChangePassword;
