import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import logo from "../images/Group.png";

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Send a request to the server to create a new user
    // using the form values
  }

  return (
    <div className="signup">
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <form className="signup-container" onSubmit={handleSubmit}>
        <h2 className="signup-header">Sign up</h2>
        <div className="form-div">
          <div>
            <label className="label" htmlFor="firstName">
              First name:
            </label>
            <br />
            <input type="text" id="firstName" className="signup-input" value={firstName} onChange={handleFirstNameChange} />
          </div>
          <div>
            <label className="label" htmlFor="lastName">
              Last name:
            </label>
            <br />
            <input type="text" id="lastName" className="signup-input" value={lastName} onChange={handleLastNameChange} />
          </div>
          <div>
            <label className="label" htmlFor="email">
              Email:
            </label>
            <br />
            <input type="email" id="email" className="signup-input" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label className="label" htmlFor="password">
              Password:
            </label>
            <br />
            <input type="password" id="password" className="signup-input" value={password} onChange={handlePasswordChange} />
          </div>
          <div>
            <label className="label" htmlFor="password">
              Confirm Password:
            </label>
            <br />
            <input type="password" className="signup-input" onChange={handlePasswordChange} />
          </div>
        <button type="submit" className="signup-button">
          Sign up
        </button>
        </div>
        <Link to="/">
          <button className="back">BACK TO HOME</button>
        </Link>
      </form>
    </div>
  );
}

export default SignUpPage;
