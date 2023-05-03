import React, { useState } from "react";
import "./Login.css";

export default function Login(props) {
  const displayEventAction = () => {};
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div onClick={displayEventAction} className="backgrounds">
      <h1 className="naslov">Log in</h1>
      <form className="logform" onSubmit={handleSubmit}>
        <label className="lab" for="email">
          E-mail:
        </label>
        <input
          className="inp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your e-mail"
        />

        <label className="lab" for="password">
          Password:
        </label>
        <input
          className="inp"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={passwordShown ? "text" : "password"}
          placeholder="********"
        />
        <span onClick={togglePassword}>Show</span>
      </form>
      <button className="butt" type="submit">
        Login
      </button>
    </div>
  );
}
