import React, { useContext, useState } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import "./Login.css";

export default function Login(props) {
  const { setUser } = useContext(GeneralContext);
  const displayEventAction = () => {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setUser(email);
  };

  const switchToSignInForm = () => {
    window.location.replace("/signup");
  };

  return (
    <div onClick={displayEventAction} className="backgrounds">
      <h1 className="naslov">Log in</h1>
      <form className="logform" onSubmit={handleSubmit}>
        <label className="lab" htmlFor="email">
          E-mail:
        </label>
        <input
          className="inp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your e-mail"
        />

        <label className="lab" htmlFor="password">
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
        <p>
          Don't Have an Account!
          <span className="sign-in" onClick={switchToSignInForm}>
            Sign in
          </span>
        </p>
      </form>
      <button onClick={handleSubmit} className="butt" type="submit">
        Login
      </button>
    </div>
  );
}
