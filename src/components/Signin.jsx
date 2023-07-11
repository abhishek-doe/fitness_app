import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import logo from "../images/Group.png";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Send a request to the server to authenticate the user
    // using the email and password values
  }

  return (
    <div className="signin">
        <Link to="/" className="logo">
          <img src={logo} />
        </Link>
      <form className="signin-container" onSubmit={handleSubmit}>
        <h2 className="signin-header">Sign in</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="signin-input" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="signin-input" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="signin-button">
          Sign in
        </button>

        <Link to="/">
          <button className="back">BACK TO HOME</button>
        </Link>
      </form>
    </div>
  );
}

export default Signin;
