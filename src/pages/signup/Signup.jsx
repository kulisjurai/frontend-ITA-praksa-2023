import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass, name, lastname);
  };

  const switchToLoginForm = () => {
    window.location.replace("/login");
  };
  return (
    <>
      <div className="background-signup">
        <h1>Sign up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="name">First name: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="First name"
            id="name"
            name="name"
          ></input>

          <label htmlFor="lastname">Last name: </label>
          <input
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last name"
            id="lastname"
            name="lastname"
          />

          <label htmlFor="email">E-mail: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmail.com"
            id="email"
            name="email"
          />

          <label htmlFor="password">Password: </label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
          <br />
          <p>
            Already have an Account!
            <span className="sign-in" onClick={switchToLoginForm}>
              Login in
            </span>
          </p>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </>
  );
}
