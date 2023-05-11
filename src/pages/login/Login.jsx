import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  }

  const switchToSignUpForm = () => {
    window.location.replace("/signup");
  };

  return (
    <>
    <div className="background-login">
      <h1>Log in</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-div">
          <label htmlFor="username"></label><br />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            id="username"
            name="username" />
        </div>

        <div className="login-div">
          <label htmlFor="password"></label><br />
          <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password" />
        </div>
        <br />
        <p>
          Don't have an Account!
          <span className="log-in" onClick={switchToSignUpForm}>
            Sign up!
          </span>
        </p>

        <button type="submit">Log in</button>
      </form>
    </div>
    </>
  )
}
