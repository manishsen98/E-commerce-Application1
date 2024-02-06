import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChangeUsername = (e) => {
    setUserData({ ...userData, username: e.target.value });
  };

  const onChangeEmail = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const renderPasswordField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          PASSWORD
        </label>
        <input
          type="text"
          placeholder="PASSWORD"
          className="username-input-field"
          value={userData.password}
          onChange={onChangePassword}
        />
      </>
    );
  };

  const renderEmailField = () => {
    return (
      <>
        <label className="input-label"> Email</label>
        <input
          type="text"
          className="password-input-field"
          value={userData.email}
          placeholder="Email"
          onChange={onChangeEmail}
        />
      </>
    );
  };

  const renderUsernameField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          placeholder="username"
          className="username-input-field"
          value={userData.username}
          onChange={onChangeUsername}
        />
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    const userDetails = { username, email, password };
    axios
      .post("http://localhost:5000/api/register", userDetails)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register-form-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-desktop-img"
          alt="website logo"
        />
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderEmailField()}</div>
        <div className="input-container"> {renderPasswordField()} </div>
        <button className="button" type="submit">
          Sign Up
        </button>
        <p className="options">
          {" "}
          Already a member ? <Link to="/login"> Login</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
